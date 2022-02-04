import test from 'ava'
import { createTree } from '../init'
import { addChild, customDfs } from '../util'

test('Successfully add child', (t) => {
  const root = createTree()
  const search = customDfs(root, 'Victoire')
  t.is(search.person.children.length === 1, true)
  const childName = 'Mark'
  const childGender = 'male'
  const { updatedRoot, status } = addChild('Victoire', childName, childGender, root)
  const { person } = customDfs(updatedRoot, 'Victoire')
  t.is(status === 'CHILD_ADDED', true)
  t.is(person.children.length === 2, true)
  t.is(person.children.some((c:any) => c.name === childName && c.gender === childGender), true)
})

test('failed add child to male', (t) => {
  const root = createTree()
  const childName = 'Mark'
  const childGender = 'male'
  const addResponse = addChild('Charlie', childName, childGender, root)
  t.is(addResponse.status === 'CHILD_ADDITION_FAILED', true)
})

test('failed to find person', (t) => {
  const root = createTree()
  const childName = 'Mark'
  const childGender = 'male'
  const addResponse = addChild('Johny', childName, childGender, root)
  t.is(addResponse.status === 'PERSON_NOT_FOUND', true)
})

test('failed to add to female without a spouse', (t) => {
  const root = createTree()
  const childName = 'Mark'
  const childGender = 'male'
  const addResponse = addChild('Dominique', childName, childGender, root)
  t.is(addResponse.status === 'CHILD_ADDITION_FAILED', true)
})
