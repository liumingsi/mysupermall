export function debounce(func,delay){ //防抖函数
  let tiemr = null
  return function (...args){
    if(tiemr) clearTimeout(tiemr);//有值则清除上一次请求
    tiemr = setTimeout(() => {
      func.apply(this,args)
    },delay)
  }
}

