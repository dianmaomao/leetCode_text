/*
 * @Author:  QWB <wenbin.qiu@hand-china.com>
 * @Date: 2021-09-28 21:09:37
 * @LastEditors: QWB
 * @LastEditTime: 2021-09-28 21:16:21
 * @Description:
 */
/* 
罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

输入: "III"
输出: 3

输入: "IV"
输出: 4

输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
*/

/* 
思路： 遍历字符，如果判断当前和下一个字符大小，如果比下一个大则直接相加，如果比下一个小，则减去
*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const symbolValues = new Map();
	symbolValues.set('I', 1);
	symbolValues.set('V', 5);
	symbolValues.set('X', 10);
	symbolValues.set('L', 50);
	symbolValues.set('C', 100);
	symbolValues.set('D', 500);
	symbolValues.set('M', 1000);
	let ans = 0;
	const n = s.length;
	for (let i = 0; i < n; ++i) {
		const value = symbolValues.get(s[i]);
		if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
			ans -= value;
		} else {
			ans += value;
		}
	}
	return ans;
};
