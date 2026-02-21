import { execSync } from "child_process";
import { existsSync, mkdirSync } from "fs";

const inputPath = "/vercel/share/v0-project/scripts/original-hero.mp4";
const outputPath = "/vercel/share/v0-project/public/videos/hero-bg.mp4";

// Ensure output directory exists
const outputDir = "/vercel/share/v0-project/public/videos";
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Trim first 6 seconds using ffmpeg
try {
  console.log("Trimming first 6 seconds from video...");
  execSync(
    `ffmpeg -y -ss 6 -i "${inputPath}" -c copy "${outputPath}"`,
    { stdio: "inherit" }
  );
  console.log("Video trimmed successfully! Saved to:", outputPath);
} catch (err) {
  console.error("ffmpeg failed, trying with re-encoding...");
  try {
    execSync(
      `ffmpeg -y -ss 6 -i "${inputPath}" -c:v libx264 -c:a aac "${outputPath}"`,
      { stdio: "inherit" }
    );
    console.log("Video trimmed with re-encoding successfully!");
  } catch (err2) {
    console.error("Failed to trim video:", err2.message);
    process.exit(1);
  }
}
