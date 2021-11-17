/**
 * @jest-environment jsdom
 */

import React from 'react'
import renderer from 'react-test-renderer'
import Aside from './Aside'

it('renders the Aside component', () => {
  const aside = renderer.create(<Aside />).toJSON()

  expect(aside).toMatchSnapshot()
})
