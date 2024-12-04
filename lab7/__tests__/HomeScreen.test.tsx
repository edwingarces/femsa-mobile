import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../src/screens/HomeScreen';
import {expect, it} from '@jest/globals';

it('HomeScreen component renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
