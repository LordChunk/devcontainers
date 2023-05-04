// Get the directory name of the current file
const __dirname = new URL('.', import.meta.url).pathname;

// Get all the files from ../configurations ending .json
const files = [];
for await (const file of Deno.readDir(`${__dirname}/../configurations`)) {
  if (file.name.endsWith('.json')) {
    // Strip the .json extension
    files.push(file.name.slice(0, -5));
  }
}

console.log(files);