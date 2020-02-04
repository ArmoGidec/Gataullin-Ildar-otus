const [_, __, dirPath] = process.argv;

if (!dirPath) {
    throw new Error('Argument "--path" is required.');
}

const fs = require('fs');

const getPathNames = (dirPath, dirents, checkTypeFunc) => dirents.filter(dirent => dirent[checkTypeFunc]()).map(dirent => `${dirPath}/${dirent.name}`);

/**
 * @param {string} dirPath 
 * @returns {Promise<{
   files: string[],
   dirs: string[]
  }>}
 */
const tree = (dirPath) => fs.promises.readdir(dirPath, { withFileTypes: true }).then(dirents => {
    let files = getPathNames(dirPath, dirents, 'isFile');
    let dirs = getPathNames(dirPath, dirents, 'isDirectory');

    return Promise.all(dirs.map(folder => tree(folder))).then(dataArr => {
        const treeFiles = dataArr.map(data => data.files);
        const treeDirs = dataArr.map(data => data.dirs);
        return {
            files: files.concat(...treeFiles),
            dirs: [dirPath].concat(...treeDirs)
        }
    });
});

tree(dirPath).then(data => console.log(data));


module.exports = tree;