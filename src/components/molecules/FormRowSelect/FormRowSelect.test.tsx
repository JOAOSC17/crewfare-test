import React from 'react';
import { render, screen } from '@testing-library/react';
import FormRowSelect from './FormRowSelect';

describe('FormRowSelect Component', () => {
  test('renders the label and select element', () => {
    render(<FormRowSelect label="Choose an option" options={['Option 1', 'Option 2']} />);

    expect(screen.getByText('Choose an option')).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });

  test('renders the correct options', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    render(<FormRowSelect label="Choose an option" options={options} />);

    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test('passes additional props to the select element', () => {
    render(
      <FormRowSelect
        label="Choose an option"
        options={['Option 1']}
        data-testid="custom-select"
        className="custom-class"
      />
    );

    const selectElement = screen.getByTestId('custom-select');
    expect(selectElement).toHaveClass('custom-class');
  });
});
