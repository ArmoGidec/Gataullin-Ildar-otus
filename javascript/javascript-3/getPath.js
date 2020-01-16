'use strict';

/**
 * requires 2 modules: lodash and lodash.combinations
 */
const getPath = (() => {

    /**
     * @param {HTMLElement} element 
     * @returns {string}
     */
    const getPath = (element) => {

        if (element === document.body) {
            return 'body';
        }

        let check = _check(element);

        // Possible selectors (id, class, tag)
        let _tag = element.tagName.toLocaleLowerCase();
        let _id = element.id ? `#${element.id}` : null;
        let _classList = Array.from(element.classList).map(className => `.${className}`);
        let _attributes = combine([].filter
            .call(element.attributes, attr => attr.name !== "id" && attr.name !== "class")
            .map(({ name, value }) => `${name}="${value}"`)).map(attr => `[${attr}]`);

        // Combinations of selectors
        let _combinations = combine([_tag, _id, ..._classList, ..._attributes].filter(Boolean)).map(_combination => _combination.join(''));

        for (let combination of _combinations) {
            if (check(combination)) {
                return combination;
            }
        }

        let parent = element.parentElement;

        let index = Array.from(parent.children).findIndex(el => el === element);
        for (let combination of _combinations) {
            if (check(`${combination}:first-child`)) {
                return `${combination}:first-child`;
            }

            if (check(`${combination}:last-child`)) {
                return `${combination}:last-child`;
            }

            if (check(`${combination}:nth-child(${index + 1})`)) {
                return `${combination}:nth-child(${index + 1})`;
            }
        }

        let parentPath = getPath(parent);

        for (let combination of _combinations) {
            if (check(`${parentPath} ${combination}`)) {
                return `${parentPath} ${combination}`;
            }

            if (check(`${parentPath} > ${combination}`)) {
                return `${parentPath} > ${combination}`;
            }
        }

        return null;
    }

    const _check = (element) => (selector) => 
        document.querySelectorAll(selector).length === 1 
        && document.querySelector(selector) === element;

    const combine = (selectors) => _.flatMap(selectors, (__, i, a) => _.combinations(a, i + 1));

    return getPath;
})();


let el = document.getElementsByClassName('hero')[1];
let path = getPath(el);

console.log(path);
console.log(document.querySelectorAll(path) === el); // must be true!