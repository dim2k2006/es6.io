import {sum, kebabCase} from 'npm:lodash';
import {addTax} from './checkout';

console.log(kebabCase('Wes is so cooool!'));

console.log(addTax(100, 0.15));