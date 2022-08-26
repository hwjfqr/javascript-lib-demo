function subtract(...args: number[]) {
  return args.reduce((ac, cur) => ac - cur)
}

export default subtract
