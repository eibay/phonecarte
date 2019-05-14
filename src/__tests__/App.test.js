import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import data from '../data/data.json'

test('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
})

const numItems = data.length
test('Number of items = 5', () => {
    expect(numItems).toBe(6)
})

const dataTest = data[0].productName
test('There is an iPhone in this product name', () => {
    expect(dataTest).toMatch(/iphone/i)
})
