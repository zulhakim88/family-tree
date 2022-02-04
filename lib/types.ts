export interface Person {
  name: string,
  gender: string,
  spouse?: Person,
  // parent?: Person,
  children?: Person[],
}
