import { writeMarker } from "./buildSetup.js";

const filePath = writeMarker("theme.generated.json", {
  generatedAt: new Date().toISOString(),
  source: "themeGenerator"
});

console.log(`themeGenerator: wrote ${filePath}`);
