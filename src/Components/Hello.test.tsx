import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('render hello without set enthusasimLevel', () => {
    render(<Hello name="typescript" />);
    const text = screen.getByText
    console.log('text', text);
})