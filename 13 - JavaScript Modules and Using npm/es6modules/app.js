import {uniq} from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import {apiKey as key, url, sayHi, old, dog} from './src/config';

console.log(key);
console.log(url);
sayHi('Wes');

const ages = [1, 32, 45, 12, 33, 22];

// console.log(uniq(ages));