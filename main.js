const fs = require('fs');
const translate = require('./translate');

const inputData = JSON.parse(fs.readFileSync('input.json'));
const outputData = translate(inputData, {key: 'filename', value: 'data'}, {key: 'key', value: 'value'});
fs.writeFileSync('output.json', JSON.stringify(outputData));