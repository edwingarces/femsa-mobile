import 'react-native';
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import App from '../App';
import {expect, it} from '@jest/globals';

it('shpuld add task to the list', () => {
  const taskName = 'Task to test';
  const { getByTestId, getByText } = render(<App />);
  const input = getByTestId('taskInput');
  const addButton = getByTestId('addButton');
  expect(input).toBeTruthy();
  waitFor(() => {
    fireEvent.changeText(input, taskName);
  });
  expect(input.props.value).toBe(taskName);
  waitFor(() => {
    fireEvent.press(addButton);
  });
  const task = getByText(taskName);
  expect(task).toBeDefined();
});
