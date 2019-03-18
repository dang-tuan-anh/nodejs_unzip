const zlib = require('zlib');
const fs = require('fs');

const input = fs.readFileSync('input.txt', {encoding:'utf-8'});

const buffer = Buffer.from(input, 'base64');
const out = zlib.unzipSync(buffer);
const format = require('xml-formatter');
const formattedXml = format(out.toString());
console.log(formattedXml);
fs.writeFileSync('output.xml', formattedXml);
