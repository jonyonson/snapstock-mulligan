import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';
import useSearch from '../../hooks/use-search';

jest.mock('../../hooks/use-search');

const mockResults = [{ symbol: 'AAPL', name: 'Apple Inc.' }];

describe('<Search />', () => {
  it('renders a listbox when input is not empty', () => {
    useSearch.mockReturnValue(mockResults);
    render(<Search placeholder="Search" />);

    const input = screen.getByPlaceholderText('Search');
    userEvent.type(input, 'test');
    const listbox = screen.getByRole('listbox');

    expect(input.value).toBe('test');
    expect(listbox).toBeVisible();
  });

  // it('displays the correct value when a listbox option is clicked', () => {
  //   useSearch.mockReturnValue(mockResults);
  //   render(<Search placeholder="Search" />);

  //   const input = screen.getByPlaceholderText('Search');
  //   userEvent.type(input, 'test');
  //   const option = screen.getByTestId('combobox-option');

  //   userEvent.click(option);

  //   expect(input.value).toBe('AAPL, Apple Inc.');
  // });
});
