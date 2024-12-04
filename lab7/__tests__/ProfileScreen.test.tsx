// __tests__/ProfileScreen.test.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileScreen from '../src/screens/ProfileScreen';
import {expect, it} from '@jest/globals';

it('ProfileScreen component renders correctly', () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
