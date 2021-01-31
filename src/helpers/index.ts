export const random = (start: number, finish: number): number =>
  ~~(Math.random() * finish) + start
export const shuffle = (array: any[]): any[] =>
  array.sort(() => Math.random() - 0.5)
