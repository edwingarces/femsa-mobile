import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import {expect, it} from '@jest/globals';

it('App component renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
