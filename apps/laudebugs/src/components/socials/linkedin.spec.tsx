import React from 'react'
import renderer from 'react-test-renderer'
import LinkedIn from './linkedin'

it('renders the Aside component', () => {
  const linkedIn = renderer.create(<LinkedIn />).toJSON()

  expect(linkedIn).toMatchSnapshot()
})
