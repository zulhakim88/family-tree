import test from 'ava'
import { createTree } from '../init'
import { customDfs } from '../util'

test('is tree created', (t) => {
  const hmm = createTree()
  t.is(hmm.name === 'King Arthur', true)
})

test('search person', (t) => {
  const root = createTree()
  const searchResult = customDfs(root, 'Remus')
  t.is(searchResult?.person?.name === 'Remus', true)
  t.is(searchResult?.count, 3)
  t.is(searchResult?.lineage[2], 'Victoire')
})

test('determine relationship', (t) => {
  const root = createTree()
  const person1 = customDfs(root, 'Remus')
  const person2 = customDfs(root, 'Louis')
  t.is(person1.lineage[1], person2.lineage[1])
})
