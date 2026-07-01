const chokidar = require("chokidar");
const simpleGit = require("simple-git");

const git = simpleGit();

// ================= CONFIG =================
const CONFIG = {
    PROJECT_PATH: process.cwd(),
    AUTO_PUSH: true,
    BRANCH: "main",
    DEBOUNCE_TIME: 5 * 60 * 1000, // 5 minutes
};

// ================= STATE =================
let timer = null;
let isProcessing = false;

// ================= SMART MESSAGE =================
async function generateSmartMessage(status) {
    const files = [
        ...status.modified,
        ...status.created,
        ...status.deleted,
        ...status.renamed.map(r => r.to)
    ];

    if (files.length === 0) {
        return "chore: minor updates";
    }

    const hasFrontend = files.some(file =>
        /\.(html|css|scss|sass|jsx|tsx|vue)$/i.test(file)
    );

    const hasBackend = files.some(file =>
        /\.(js|ts)$/i.test(file) ||
        file.includes("server") ||
        file.includes("api") ||
        file.includes("controller") ||
        file.includes("routes")
    );

    const hasConfig = files.some(file =>
        /\.(json|ya?ml)$/i.test(file) ||
        file.includes(".env") ||
        file.includes("config")
    );

    const hasDocs = files.some(file =>
        /\.(md)$/i.test(file) ||
        file.toLowerCase().includes("readme")
    );

    let message = "";

    if (hasFrontend && hasBackend) {
        message = "feat: update frontend and backend";
    } else if (hasFrontend) {
        message = "ui: improve frontend";
    } else if (hasBackend) {
        message = "fix: update backend logic";
    } else if (hasConfig) {
        message = "chore: update configuration";
    } else if (hasDocs) {
        message = "docs: update documentation";
    } else {
        message = "refactor: project improvements";
    }

    if (files.length <= 3) {
        message += ` (${files.join(", ")})`;
    }

    return message;
}

// ================= AUTO COMMIT =================
async function runGitAutoCommit() {
    if (isProcessing) return;

    isProcessing = true;

    try {

        console.log("\n🔍 Checking git status...");

        const status = await git.status();

        if (status.isClean()) {
            console.log("✅ Repository is clean.");
            return;
        }

        console.log("📦 Staging files...");

        await git.add(".");

        const commitMessage = await generateSmartMessage(status);

        console.log("📝 Commit Message:");
        console.log(commitMessage);

        await git.commit(commitMessage);

        console.log("✅ Commit created successfully.");

        if (CONFIG.AUTO_PUSH) {

            console.log("🚀 Pushing to GitHub...");

            await git.push("origin", CONFIG.BRANCH);

            console.log("✅ Push completed.");

        }

        console.log("🎉 Done.");

    } catch (err) {

        console.error("\n❌ Auto Git Error");
        console.error(err.message);

    } finally {

        isProcessing = false;

    }
}

// ================= WATCHER =================

console.log("👀 GitAutoPilot Started");
console.log(`📂 Watching: ${CONFIG.PROJECT_PATH}`);
console.log(`⏱ Auto Commit Delay: ${CONFIG.DEBOUNCE_TIME / 60000} minutes\n`);

const watcher = chokidar.watch(CONFIG.PROJECT_PATH, {

    ignored: [
        /node_modules/,
        /\.git/,
        /dist/,
        /build/,
        /out/,
        /\.next/,
        /coverage/,
        /\.turbo/
    ],

    persistent: true,
    ignoreInitial: true

});

watcher.on("all", (event, filePath) => {

    console.log(`📄 ${event}: ${filePath}`);

    clearTimeout(timer);

    console.log("⏳ Waiting for developer to become idle...");

    timer = setTimeout(() => {

        runGitAutoCommit();

    }, CONFIG.DEBOUNCE_TIME);

});

process.on("SIGINT", () => {

    console.log("\n🛑 GitAutoPilot stopped.");

    watcher.close();

    process.exit(0);

});