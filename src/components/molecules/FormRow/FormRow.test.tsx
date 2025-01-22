import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormRow from './FormRow';
describe('FormRow Component', () => {
  test('renders label and input correctly', () => {
    render(<FormRow label="Username" inputType="text" placeholder="Enter username" />);
    
    expect(screen.getByText('Username')).toBeInTheDocument();
    
    const inputElement = screen.getByPlaceholderText('Enter username');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test('passes additional props to the input element', () => {
    render(
      <FormRow
        label="Password"
        inputType="password"
        placeholder="Enter password"
        data-testid="password-input"
        maxLength={20}
      />
    );

    const inputElement = screen.getByTestId('password-input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('maxLength', '20');
  });

  test('handles user input correctly', async () => {
    const user = userEvent.setup();
    render(<FormRow label="Email" inputType="email" placeholder="Enter email" />);

    const inputElement = screen.getByPlaceholderText('Enter email');
    await user.type(inputElement, 'test@example.com');

    expect(inputElement).toHaveValue('test@example.com');
  });
});
