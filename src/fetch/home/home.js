import { get } from '../get';

export function getCarouselData() {
    let result = get('/home/carousel');
    return result; 
}

export function getDiscountData(city) {
    let result = get('/home/'+ encodeURIComponent(city));
    return result; 
}

export function getLikeData(city, page) {
    let result = get('/homeLike/' + encodeURIComponent(city) + '/' + page);
    return result; 
}