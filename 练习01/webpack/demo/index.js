var oCalc = require('./calc.js');
// 引入css
require('style-loader!css-loader!./style.css');
// 第一个函数
function say(){
	alert('webpack开始练习');
}
say();

// 第二个函数
oCalc.add(10,20);


