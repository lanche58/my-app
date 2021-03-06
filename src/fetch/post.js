import 'whatwg-fetch';
import 'es6-promise';

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function objConnect(obj) {
    let result = '';
    for (let item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    if (result) {
        result = result.slice(1);
    }
    return result;
}

export function post(url, obj) {
    let result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 注意 post 时候参数的形式
        body: objConnect(obj)
    });
    return result;
}