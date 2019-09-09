//设置cookies
export function setCookies(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));//附加多少天
    var expires = "exdays=" + d.toGMTString();
    document.cookie = name + "=" + value + "; " + expires;
}
export function getCookies(name) {//默认获取不到过期日期
  console.log(document.cookie.length);
    if (document.cookie.length > 0) {
        var name = name + "=";//以获取name+""的长度获取
        var ca = document.cookie.split(';');//把字符串拆分成数组；
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0)//检索每一个name是否为我们需要的name值
            {
                return c.substring(name.length, c.length);
            }
            ;//value
        }
        return "";

    }
    else return ""
}
