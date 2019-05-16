import { get } from './get';
import { post } from './post';

export function getData() {
    let result = get('/api/1');
    result.then(res => {
        return res.text();
    }).then(text => {
        console.log(text);
    });

    let resultJson = get('/api/2');
    resultJson.then(res => {
        return res.json();
    }).then(json => {
        console.log(json);
    });
}

export function postData() {
    let result = post('/api/post', {
        a: 100,
        b: 200
    });
    result.then(res => {
        return res.json();
    }).then(json => {
        console.log(json);
    });
}