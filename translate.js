/**
 * Takes an array of objects and rearranges each object so that
 * the objects identified using swapProps1 are grouped together
 * under each object identified by swapProps2, making them their parents.
 * @param {object[]} input
 * @param {{key: string, value: string}} swapProps1
 * @param {{key: string, value: string}} swapProps2
 */
function translate(input, swapProps1, swapProps2) {
  let map = {};
  for(let file of input) {
    for(let item of file.data) {
      if(item[swapProps2.key] in map === false) {
        map[item[swapProps2.key]] = [];
      }
      let o = {};
      o[swapProps1.key] = file[swapProps1.key];
      o[swapProps2.value] = item[swapProps2.value];
      map[item[swapProps2.key]].push(o);
    }
  }
  return Object.keys(map).map(key => {
    let o = {};
    o[swapProps2.key] = key;
    o[swapProps1.value] = map[key];
    return o;
  });
}
module.exports = translate;