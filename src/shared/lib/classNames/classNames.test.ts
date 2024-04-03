import { cn } from './classNames'

describe('classNames', () => {
  test('with only first argument', () => {
    expect(cn('test-class')).toBe('test-class')
  })

  test('with additional classes', () => {
    expect(cn('test-class', ['class-one', 'class-two'])).toBe('test-class class-one class-two')
  })

  test('with additional class and mods', () => {
    expect(cn('test-class', ['class-one'], { hovered: true, focus: true })).toBe('test-class class-one hovered focus')
  })

  test('with false mod', () => {
    expect(cn('test-class', [], { hovered: true, focus: false })).toBe('test-class hovered')
  })
})
