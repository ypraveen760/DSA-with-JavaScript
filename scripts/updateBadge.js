const fs = require("fs");

// Read the problems JSON
const problems = JSON.parse(fs.readFileSync("problems.json"));

// Count solved problems
const solved = problems.filter(p => p.status === "solved").length;
const total = problems.length;

// Prepare badge markdown
const badge = `![Progress](https://img.shields.io/badge/DSA-${solved}/${total}-green)\n`;

// Read existing README
let readme = fs.readFileSync("README.md", "utf8");

// Replace existing badge or add new one
if (readme.includes("![Progress]")) {
  readme = readme.replace(/!\[Progress\]\([^)]+\)/, badge.trim());
} else {
  readme = badge + "\n" + readme;
}

// Save updated README
fs.writeFileSync("README.md", readme);
console.log(`Updated badge: ${solved}/${total}`);
