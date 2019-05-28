import { get } from '../get';

export function getDiscountData(city) {
    let result = get('/home/'+ encodeURIComponent(city));
    return result; 
}