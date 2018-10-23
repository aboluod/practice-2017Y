/**
 * 存储localStorage
 */
function setStore(key, value) {
  if (!key) return
  if (typeof value !== 'string') {
  	// 不带过期时间的写法
    // value = JSON.stringify(value)

    // 带过期时间的写法
    var curTime = new Date().getTime();
    value = JSON.stringify({value:value,time:curTime})
  }
  window.localStorage.setItem(key,value)
}
  
/**
 * 获取localStorage
 */
function getStore(key) {
  if (!key) return
  // 不带过期时间的写法
  // return window.localStorage.getItem(key)

  // 带过期时间的写法
  var data = localStorage.getItem(key);
  if(data==null){
  	return 'false'
  }
  var dataObj = JSON.parse(data);
  // 如果localstorage里存的数据过了有效期（这里有效期设置的是30天），就执行if语句
  if (new Date().getTime() - dataObj.time>30*24*60*60*1000) {
    setStore(key,false)
  }else{
    return window.localStorage.getItem(key)
  }
}
  
/**
 * 删除localStorage
 */
function removeStore(key) {
  if (!key) return
  window.localStorage.removeItem(key)
}
  