/** 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
*/

/**
 * 321
 * 123
 * 321 % 10
 */
const reverse = function (x) {
  let result = 0
  while (x !== 0) {
    result = result * 10 + x % 10
    x = (x / 10) | 0
  }
  // a | 0 将变量 a 中的数值转换为 32 位有符号整数
  return (result | 0) === result ? result : 0
}

// return 321
const result = reverse(11132)
console.log(result)
