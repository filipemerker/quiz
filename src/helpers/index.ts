export const random = (start: number, finish: number): number =>
  ~~(Math.random() * finish) + start
