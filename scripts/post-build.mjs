import fs from "node:fs";
import path from "node:path";

const outDir = "out";
const target = "/zhaoer/zh/";
const html = `<!doctype html>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0;url=${target}">
<title>Redirecting…</title>
<link rel="canonical" href="${target}">
<p>Redirecting to <a href="${target}">${target}</a>…</p>
`;

fs.writeFileSync(path.join(outDir, "index.html"), html);
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
console.log(`post-build: wrote ${outDir}/index.html (→ ${target}) and .nojekyll`);
