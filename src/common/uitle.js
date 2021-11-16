export function debounce(func,delay){ //防抖函数
  let tiemr = null
  return function (...args){
    if(tiemr) clearTimeout(tiemr);//有值则清除上一次请求
    tiemr = setTimeout(() => {
      func.apply(this,args)
    },delay)
  }
}

export function formatDate(date,fmt) {
  //1,获取年份
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  //2,获取月份，天数，时间
  let o = {
    'M+':date.getMonth() + 1,
    'd+':date.getDate(),
    'h+':date.getHours(),
    'm+':date.getMinutes(),
    's+':date.getSeconds()
  };
  for(let k in o) {
    if(new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
