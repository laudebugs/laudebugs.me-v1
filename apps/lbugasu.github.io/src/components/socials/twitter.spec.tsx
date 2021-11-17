import React from 'react'
import renderer from 'react-test-renderer'
import Twitter from './twitter'

it('renders the Aside component', () => {
  const twitter = renderer.create(<Twitter />).toJSON()

  expect(twitter).toMatchSnapshot()
})
