import { Person } from '../lib/types'

export const customDfs = (person: Person, name: string, count: number = 0, lineage: string[] = []) => {
  let newPerson = person
  if (person.name === name) return { person, count, lineage }
  if (person.gender === 'male' && person.spouse) {
    newPerson = person.spouse
  }
  if (newPerson.name === name) return { newPerson, count, lineage }
  for (const p of newPerson.children ?? []) {
    const found: any = customDfs(p, name, ++count, [...lineage, newPerson.name])
    if (found.person) return found
  }
  return { person: undefined, count, lineage }
}

export const addChild = (motherName: string, childName: string, childGender: string, root: Person) => {
  const { person } = customDfs(root, motherName)
  if (!person) return { updatedRoot: root, status: 'PERSON_NOT_FOUND' }
  if (person.gender === 'male') return { updatedRoot: root, status: 'CHILD_ADDITION_FAILED' }
  if (!person.spouse) {
    return { updatedRoot: root, status: 'CHILD_ADDITION_FAILED' }
  }
  const newChildren: Person = {
    name: childName,
    gender: childGender
  }
  person.children.push(newChildren)
  return { updatedRoot: root, status: 'CHILD_ADDED' }
}
