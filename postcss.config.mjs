import path from "path";
import fs from "fs";

let baseDir = process.cwd();
if (!fs.existsSync(path.join(baseDir, "package.json"))) {
  const fallback = path.join(baseDir, "blobs3d");
  if (fs.existsSync(path.join(fallback, "package.json"))) {
    baseDir = fallback;
  }
}

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      base: baseDir,
    },
  },
};

export default config;

