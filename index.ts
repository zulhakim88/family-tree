import { createTree } from './init'
import { Person } from './lib/types'
import { addChild } from './util'

const yargs = require('yargs')
const fs = require('fs')
const path = require('path')
const readline = require('readline')

const processLine = async (filePath: string, root: Person) => {
  const treeRoot = root
  const fileStream = fs.createReadStream(filePath)

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })

  for await (const line of rl) {
    if (line.startsWith('ADD_CHILD')) {
      console.log('Doing ADD Child')
      const textArray = line.split(' ')
      const motherName = textArray[1]
      const childName = textArray[2]
      const childGender = textArray[3]
      const { status } = addChild(motherName, childName, childGender, treeRoot)
      console.log(status)
    } else if (line.startsWith('GET_RELATIONSHIP')) {
      console.log('Doing GET Relationship')
    } else {
      console.log('Not Doing Anything =(')
    }
  }
}

const inputParam = yargs
  .usage('Usage: -p <path>')
  .option('p', { alias: 'path', describe: 'File path', type: 'string', demandOption: true })
  .argv

const root = createTree()
processLine(path.normalize(inputParam.path), root)
