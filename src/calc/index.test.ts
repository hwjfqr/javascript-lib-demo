import { add, subtract, multiply, divide } from './index'

test('add test', () => {
  expect(add(1, 2)).toBe(3)
})

test('subtract test', () => {
  expect(subtract(1, 2)).toBe(-1)
})

test('multiply test', () => {
  expect(multiply(1, 2)).toBe(2)
})

test('divide test', () => {
  expect(divide(1, 2)).toBe(0.5)
})
