import {uniq} from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import {apiKey as key, url, sayHi, old, dog} from './src/config';
import User, {createURL, gravatar} from './src/user';

const user = new User('Wes Bos', 'wes@gmail.com', 'wes.com');
const profile = createURL(user.name);
const image = gravatar(user.email);

console.log(image);