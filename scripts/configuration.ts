// Get workdir from GitHub Actions environment
const __dirname = env.WORKDIR;

// Get all the files from ../configurations ending .json
const files = [];
for await (const file of Deno.readDir(`${__dirname}/configurations`)) {
  if (file.name.endsWith('.json')) {
    // Strip the .json extension
    files.push(file.name.slice(0, -5));
  }
}

console.log(files);