import fs from "fs";
import path from "path";

const galleryDir = path.join(process.cwd(), "public", "gallery");
const outputFile = path.join(process.cwd(), "src", "galleryData.js");

const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"];

if (!fs.existsSync(galleryDir)) {
  console.error("❌ public/gallery folder was not found.");
  process.exit(1);
}

const files = fs
  .readdirSync(galleryDir)
  .filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return allowedExtensions.includes(ext);
  })
  .sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );

const galleryImages = files.map((file, index) => ({
  src: `/gallery/${encodeURIComponent(file)}`,
  featured: index < 4,
}));

const content = `export const galleryImages = ${JSON.stringify(
  galleryImages,
  null,
  2
)};
`;

fs.writeFileSync(outputFile, content);

console.log(`✅ Gallery generated successfully!`);
console.log(`📸 Found ${files.length} images.`);
console.log(`⭐ Featured images: ${Math.min(4, files.length)}`);