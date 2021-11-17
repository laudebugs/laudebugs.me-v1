import React from 'react'
import renderer from 'react-test-renderer'
import IG from './instagram'

it('renders the Aside component', () => {
  const ig = renderer.create(<IG />).toJSON()

  expect(ig).toMatchSnapshot()
})
