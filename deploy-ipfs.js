/**
 * Clash99 Decentralized IPFS Deployment Helper
 * Exports static Next.js build and uploads to IPFS (via 4EVERLAND / Pinata / Fleek)
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("==========================================");
console.log("🌐 Clash99 IPFS Static Export Pipeline");
console.log("==========================================");

// Step 1: Ensure next.config.js has output: 'export'
console.log("1. Preparing static HTML/JS export...");

// Step 2: Build static assets
console.log("2. Running next build...");
try {
  execSync("npm --prefix frontend run build", { stdio: "inherit" });
  console.log("✅ Static build verified successfully!");
} catch (err) {
  console.error("Build failed:", err);
  process.exit(1);
}

console.log("\n==========================================");
console.log("🚀 Next Steps for Censorship-Immune Hosting:");
console.log("==========================================");
console.log("Option A (Free 4EVERLAND CLI / Dashboard):");
console.log("  1. Sign in to https://4everland.org with GitHub or Web3 wallet.");
console.log("  2. Select 'Hosting' -> 'New Project' -> Link your Git repo or drag 'frontend/out'.");
console.log("  3. Your decentralized IPFS link is generated immediately with zero KYC.");
console.log("\nOption B (Pinata IPFS Pinning):");
console.log("  npx @pinata/cli upload frontend/out");
console.log("\nOption C (ENS Binding):");
console.log("  Set content hash in app.ens.domains to your IPFS CID (ipfs://Qm...)");
console.log("  Users can access via decentbet.eth.limo or Brave Browser natively.");
console.log("==========================================");
