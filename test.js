const zlib = require('zlib');
const fs = require('fs');

const input = fs.readFileSync('input.txt', {encoding:'utf-8'});

const buffer = Buffer.from(input, 'base64');
const out = zlib.unzipSync(buffer);
console.log(out.toString());
fs.writeFileSync('output.txt', out.toString());