import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'

import Speak from './Speak'

describe('<Speak>', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Speak />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("displays a message when 'speak' button is clicked", () => {
    const speak = jest.fn()
    const messageMock = ''

    const { getByText } = render(<Speak speak={speak} message={messageMock} />)

    const button = getByText(/speak/i)
    fireEvent.click(button)

    expect(speak).toHaveBeenCalled()
    // console.log(button)
  })
})
