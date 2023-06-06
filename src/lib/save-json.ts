const fs = require('fs')
const {resolve} = require('path')

export default (dirname: string, data: any[][]) => {
  fs.createWriteStream(resolve(dirname, 'data.json')).write(JSON.stringify(data))
}