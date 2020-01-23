'use strict';

const getCombinations = (() => {

    const bindRecursive = (func) => {
        const recur = (...args) => func(recur, ...args);
        return recur;
    }
    
    /**
     * Calculates all possible combinations of a certain size.
     * @param {T[]} arr A array of distinct values to calculate the combinations from.
     * @param {Number} n The Number of values to combine.
     * @returns {T[][]} Returns a new array of combinations.
     * 
     * @template {any} T
     */
    const _getCombinations = (arr, n = 1) => {
        let combinations = [];
    
        bindRecursive((recur, combination, index) =>
            combination.length < n ?
                arr.slice(index).forEach((value, i) => recur(combination.concat([value]), index + i + 1))
                : combinations.push(combination)
        )([], 0);
    
        return combinations;
    }

    return _getCombinations;

})();