import fs from "node:fs";
import path from "node:path";

export function ensureOutputDir() {
  const outputDir = path.join(process.cwd(), ".json");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  return outputDir;
}

export function writeMarker(fileName, payload) {
  const outputDir = ensureOutputDir();
  const filePath = path.join(outputDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
  return filePath;
}
