/**
 * @jest-environment jsdom
 */

import React from 'react'
import renderer from 'react-test-renderer'
import Github from './github'

it('renders the Aside component', () => {
  const gh = renderer.create(<Github />).toJSON()

  expect(gh).toMatchSnapshot()
})
