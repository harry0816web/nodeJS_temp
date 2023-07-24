const fs = require('fs')

const _ = require('lodash')
let arr = [1, [2, [3, [4]]]]

let result = _.flattenDeep(arr)

let readFileP = function (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}
readFileP('./content/first.txt').then((res) => {
    console.log(res);
    return readFileP('./content/subfolder/text.txt')
}).then((res) => {
    console.log(res);
    console.log('end');
})
