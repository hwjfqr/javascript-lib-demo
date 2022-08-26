function multiply(...args: number[]) {
  return args.reduce((ac, cur) => ac * cur)
}

export default multiply
