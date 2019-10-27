import { expect } from 'chai'
import { add } from '../src'

describe('add', () => {
  it('adds two numbers', () => {
    const result = add(1, 2)
    expect(result).to.equal(3)
  })
})
