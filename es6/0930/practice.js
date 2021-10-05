
function sort (str) {
    console.log([...str].sort());
}
// sort('bear');

function mining (...[...str]) {
    console.log(str);
}

mining('abcd');