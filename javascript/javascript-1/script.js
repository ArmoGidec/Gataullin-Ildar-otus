function sum(num) {
    let result = num;

    return function _sum() {
        if (arguments.length === 0) {
            return result;
        }

        result += arguments[0];
        return _sum;
    }
}

console.log(sum(1)(2)(3)(4)()); // 10

console.log(sum(1)(2)(3)(4)(5)()); // 15
