import 'whatwg-fetch';
import 'es6-promise';

export default function getData() {
    let result = fetch('/api/1', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });
    
    result.then(res => {
        return res.text();
    }).then(text => {
        console.log(text);
    });
}