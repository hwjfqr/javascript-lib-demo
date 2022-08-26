function divide(...args: number[]) {
  return args.reduce((ac, cur) => ac / cur)
}

export default divide
