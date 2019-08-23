const fs = require('fs');

const inputData = [
  {
    filename: 'file1',
    data: [
      {
        key: 'key1',
        value: 100
      },
      {
        key: 'key2',
        value: 200
      }
    ]
  },
  {
    filename: 'file2',
    data: [
      {
        key: 'key1',
        value: 300
      },
      {
        key: 'key2',
        value: 400
      }
    ]
  }
];


function translate(input) {
  let map = {};
  for(let file of input) {
    for(let item of file.data) {
      if(item.key in map === false) {
        map[item.key] = [];
      }
      map[item.key].push({
        filename: file.filename,
        data: item.value
      });
    }
  }
  return map;
}

const outputData = translate(inputData);
fs.writeFileSync('translated.json', JSON.stringify(outputData));