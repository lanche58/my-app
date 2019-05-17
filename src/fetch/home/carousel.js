import { get } from '../get';
import { post } from '../post';

export function getCarouselData() {
    let result = get('/home/carousel');
    return result; 
}