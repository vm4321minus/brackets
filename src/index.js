module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) return false;

  let strone = str.length;
  let strtwo = bracketsConfig.length;

  for (let j = 0; j < strone / 2; j++) {
    for (let i = 0; i < strtwo; i++) {
      str = str.replace(bracketsConfig[i].join(''), '');
    }
  }
  return str.length > 0 ? false : true;
}