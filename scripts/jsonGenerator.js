import { writeMarker } from "./buildSetup.js";

const filePath = writeMarker("content.generated.json", {
  generatedAt: new Date().toISOString(),
  source: "jsonGenerator"
});

console.log(`jsonGenerator: wrote ${filePath}`);
