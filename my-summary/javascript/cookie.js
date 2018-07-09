// 注意：在vue项目中的话，要export导出一下，不然外面拿不到
// 在页面中使用的话引入：
// import {setCookie,getCookie,delCookie} from '../文件所在路径'


// 设置cookie
// export function setCookie(cname, cvalue, exdays) {
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// 读取cookie
// export function getCookie(cname) {
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
}

// 删除cookie
// export function delCookie(cname) {
function delCookie(cname) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(cname);
    if (cval != null)
        document.cookie = cname + "=" + cval + ";expires=" + exp.toGMTString();
}