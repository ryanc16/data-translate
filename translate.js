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
  for(let itemParent of input) {
    for(let itemChild of itemParent[swapProps1.value]) {
      if(itemChild[swapProps2.key] in map === false) {
        map[itemChild[swapProps2.key]] = [];
      }
      let o = {};
      o[swapProps1.key] = itemParent[swapProps1.key];
      o[swapProps2.value] = itemChild[swapProps2.value];
      map[itemChild[swapProps2.key]].push(o);
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