/**
 * @description 工具类方法
 * @author
 * @update 2020-07-01
 */
//生成唯一的id值
export function createRandomId() {
  return (
    (Math.random() * 10000000).toString(16).substr(0, 4) +
    "_" +
    new Date().getTime() +
    "_" +
    Math.random()
      .toString()
      .substr(2, 5)
  );
}

//格式化日期js
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}
