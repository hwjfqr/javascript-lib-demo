import add from './add';
import subtract from './subtract';
import multiply from './multiply';
import divide from './divide';
declare const calc: {
    add: typeof add;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
};
export default calc;
export { add, subtract, multiply, divide };
