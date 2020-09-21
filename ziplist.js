const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

function zipList(list1, list2) {
  if (list1.length !== list2.length) {
    return 'Arrays have different lengths';
  }

  const arrLength = list1.length;
  const result = [];
  for (let i = 0; i < arrLength; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(array1, array2));
console.log(zipListTheSimpleWay(array1, array2));
