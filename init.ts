import { Person } from './lib/types'

const king: Person = { name: 'King Arthur', gender: 'male' }
const queen: Person = { name: 'Queen Margret', gender: 'female' }
const bill: Person = { name: 'Bill', gender: 'male' }
const flora: Person = { name: 'Flora', gender: 'female' }
const charlie: Person = { name: 'Charlie', gender: 'male' }
const percy: Person = { name: 'Percy', gender: 'male' }
const audrey: Person = { name: 'Audrey', gender: 'female' }
const victoire: Person = { name: 'Victoire', gender: 'female' }
const ted: Person = { name: 'Ted', gender: 'male' }
const dominique: Person = { name: 'Dominique', gender: 'female' }
const louis: Person = { name: 'Louis', gender: 'male' }
const molly: Person = { name: 'Molly', gender: 'female' }
const lucy: Person = { name: 'Lucy', gender: 'female' }
const remus: Person = { name: 'Remus', gender: 'male' }

export const createTree = () => {
  king.spouse = queen
  queen.spouse = king
  bill.spouse = flora
  flora.spouse = bill
  percy.spouse = audrey
  audrey.spouse = percy
  victoire.spouse = ted
  ted.spouse = victoire

  queen.children = [bill, flora, charlie, percy, audrey]
  flora.children = [victoire, ted, dominique, louis]
  audrey.children = [molly, lucy]
  victoire.children = [remus]

  return king
}
