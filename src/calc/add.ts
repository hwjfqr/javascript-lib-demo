function add(...args: number[]) {
  return args.reduce((ac, cur) => ac + cur)
}

export default add
