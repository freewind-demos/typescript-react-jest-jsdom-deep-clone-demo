import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import Hello from './hello';

describe('hello', () => {
  const renderResult = render(<Hello/>)
  const cloned = renderResult.container.cloneNode(true);

  it('uses raw react component', () => {
    const button = renderResult.getByRole('button')
    fireEvent.click(button);

    const count = renderResult.getByTestId('count')
    expect(count.textContent).toBe('1')
  })

  it('uses clone', () => {
    document.body.appendChild(cloned);
    const button = screen.getByRole('button')
    fireEvent.click(button);

    const count = screen.getByTestId('count')
    expect(count.textContent).toBe('1')
  })
})
