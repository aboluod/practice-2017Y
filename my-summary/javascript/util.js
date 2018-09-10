/** 
 * 校验时间格式
 * 例：checkTime('23:26:08')返回true, checkTime('27:66:08')返回false
 */  
function checkTime(timevale) {  
    var regex = /^(([0-1][0-9])|([2][0-4]))(\:)[0-5][0-9](\:)[0-5][0-9]$/g;  
    var b = regex.test(timevale);  
    return b;  
}  

/** 
 * 由秒数转化成hh:mm:ss格式 
 */  
function timeTohhmmss(seconds){  
    var hh;  
    var mm;  
    var ss;  
    if(seconds==null || seconds<0){  
        return;  
    }  
    var pseconds = parseInt(seconds);  
    //得到小时  
    hh = pseconds/3600|0;  
    pseconds = parseInt(pseconds)-parseInt(hh)*3600;  
    if(parseInt(hh)<10){  
        hh="0"+hh;  
    }  
    if(parseInt(hh)>=24){  
        hh="00";  
    }  
    //得到分钟  
    mm = parseInt(pseconds)/60|0;  
    //得到秒  
    ss = parseInt(pseconds)-parseInt(mm)*60;  
    if(parseInt(mm)<10){  
        mm = "0"+mm;  
    }  
    if(parseInt(ss)<10){  
        ss = "0"+ss;  
    }  
    return hh+":"+mm+":"+ss;  
} 

/** 
 * 验证是否为座机电话号码
 */  
function isTelephone(source) {  
    var regex = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/  
    return regex.test(source); 
}

/** 
 * 验证是否为手机号码
 */  
function isMobile(source) {  
    var regex = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;  
    return regex.test(source); 
}

/** 
 * 手机号码格式化(格式化后显示成4位一个空格隔开)
 * source是一个手机号字符串
 */ 
function formatMobile(source) {
    var val = source.replace(/\B(?=(?:\d{4})+$)/g, ' ')
    return val;
}

/** 
 * 获取今天是 ****年**月**日 星期几 
 */  
function getTodayDate(){  
    var now = new Date();  
    var yy = now.getFullYear();  
    var mm = now.getMonth()+1;  
    var dd=now.getDate();  
    var day = new Array();  
    day[0] = "星期日";  
    day[1] = "星期一";  
    day[2] = "星期二";  
    day[3] = "星期三";  
    day[4] = "星期四";  
    day[5] = "星期五";  
    day[6] = "星期六";  
    return( yy + '年' + mm + '月'+ dd +'日 '+day[now.getDay()]);  
}

/** 
 * 时间戳转成时间 
 */  
function timestampTotime(time){  
    var datetime = new Date();  
    datetime.setTime(time);  
    var year = datetime.getFullYear();  
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;  
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();  
    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();  
    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();  
    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();  
    return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;  
}

/** 
 * 把当前时间转成时间戳(总毫秒数) 
 */  
function timeTotimestamp(){  
    var datetime = new Date();
    // 第一种方法：
    return datetime.getTime();
    // 第二种方法：
    // return datetime.valueOf();
    // 第三种方法：
    // return Date.parse(datetime);

    // 第一、第二种：会精确到毫秒   第三种：只能精确到秒，毫秒用000替代
}

/** 
 * 判断是否为空 
 */  
function isEmpty(val) {  
    if (val == undefined || val == null || val == "" || val == ''  
        || val == "undefined" || val == "null" || val == "NULL") {  
        return true;  
    }  
    return false;  
} 

/** 
 * 数字四舍五入保留两位小数，并且整数部分3为以,分隔
 */ 
 function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g,'');  
    if(isNaN(num))  
    num = "0";  
    sign = (num == (num = Math.abs(num)));  
    num = Math.floor(num*100+0.50000000001);  
    cents = num%100;  
    num = Math.floor(num/100).toString();  
    if(cents<10)
    cents = "0" + cents;  
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)  
    num = num.substring(0,num.length-(4*i+3))+','+  
    num.substring(num.length-(4*i+3));  
    return (((sign)?'':'-') + num + '.' + cents);  
}

/**
 * 检验密码强度(提示：<正规项目中密码是由>8位以上大写、小写字母、数字及符号中的两种或以上组合)
 * 根据返回的数字来判断密码的强弱，如果为0，代表密码设置的不合格
 * sValue 密码
 */
 function checkPwdStrong(sValue) {
      let modes = 0
      // 通过前端验证的再进行验证
      // 不合格 返回0
      // 任何字符数的两类字符组合，弱， 返回值为1
      // 10位字符数以下的三类组合，中 ，返回值为2
      // 10位字符数以上的三类组合，强，返回值为3

      // 每多一种类型的密码形式，modes就加1
      if (sValue.length < 8) return modes
      if (/\d/.test(sValue)) modes++ // 数字
      if (/[a-z]/.test(sValue)) modes++ // 小写
      if (/[A-Z]/.test(sValue)) modes++ // 大写
      if (/\W/.test(sValue)) modes++ // 特殊字符

      // 逻辑处理
      switch (modes) {
        case 1:
          return 0
        case 2:
          return 1
        case 3:
          if (sValue.length < 10) {
            return 2
          } else {
            return 3
          }
        case 4:
          return 3
      }
}

/**对Date的扩展，将 Date 转化为指定格式的String
*月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
*年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
*例子： 
*(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
*(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
*/
Date.prototype.Format = function (fmt) {
 var o = {
     "M+": this.getMonth() + 1, //月份 
     "d+": this.getDate(), //日 
     "H+": this.getHours(), //小时 
     "m+": this.getMinutes(), //分 
     "s+": this.getSeconds(), //秒 
     "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
     "S": this.getMilliseconds() //毫秒 
 };
 if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
 for (var k in o)
 if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
 return fmt;
}

/**日期加减法  date参数为计算开始的日期，days为需要加的天数   
*格式:addDate('2017/1/11',20) 
*/
function addDate(date,days){ 
    var d=new Date(date); 
    d.setDate(d.getDate()+days); 
    var m=d.getMonth()+1; 
    return d.getFullYear()+'/'+m+'/'+d.getDate(); 
}

/** 获取url 全部参数 返回对象
* 例子：http://www.fosunling.com/demo.html?a=fjk&b=123&c=900900  调用函数后是{a:'fjk',b:'123',c:'900900'}
*/
function getRequest() {
    var url = location.search; //获取url中"?"符后的字串  
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

/** 通过指定KEY 获取URL里的参数值
* 例子：http://www.fosunling.com/demo.html?a=fjk&b=123&c=900900  调用函数getParams(a)返回fjk
**/
function getParams(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
};

/**
* 姓名脱敏处理 例：复星星---->**星
* @param val 姓名
*/
function formatName(val) {
  if (!val) {
    return ''
  }
  return val.replace(/.(?=.)/g, '*')
}

/**
* 手机脱敏处理 例：15023456789 --> 150****6789
* @param val 手机号
*/
function formatMobileStart(val) {
  if (!val) {
    return ''
  }
  return val.substring(0, 3)+'****'+val.substring(val.length - 4, val.length)
}

/**
* 银行卡号脱敏处理 例：6212262201023557228---->**************7228
* @param val 银行卡号
*/
function formatBankCardStart(val) {
  if (!val) {
    return ''
  }
  return '**************'+val.substring(val.length - 4, val.length)
}

/**
* 身份证脱敏处理 例：610523201806263674---->6****************3
*                例：610523201806263674---->610523********3674
* @param val 身份证号
*/
function formatIdCard(val) {
  if (!val) {
    return ''
  }
  // return val.substring(0, 1)+'****************'+val.substring(val.length - 1, val.length)
  return val.substring(0, 6)+'********'+val.substring(val.length - 4, val.length)
}

/**
 * 手机格式化限制长度13088889999-> 130 8888 9999
 * @param value 手机号
 */
function formatMobileLimit(value) {
    value = value.replace(/\D/g, '')
    if (value.length > 11) {
        value = value.substring(0, 11)
    }
    if (value.length === 11) {
        value = formatPhone(value)
    }
    return value
}

/**
 * 手机格式化13088889999-> 130 8888 9999
 * @param mobile 手机号
 */
function formatPhone(mobile) {
    return mobile && mobile.replace(/\B(?=(?:\d{4})+$)/g, ' ')
}

/**
 * 银行卡号格式化限制长度 6444 1213 2123 1234 1212
 * @param value 银行卡号
 */
function formatBankCardLimit(value) {
    value = value.replace(/\D/g, '')
    if (value.length >= 20) {
        value = value.substring(0, 20)
    }
    if (value.length >= 16 && value.length <= 20) {
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ')
    }
    return value
}

/**
 * 银行卡号格式化 6444 1213 2123 1234 1212
 * @param val 银行卡号
 */
function formatBankNum(val) {
    return val && val.replace(/\B(?=(?:\d{4})+$)/g, ' ')
}