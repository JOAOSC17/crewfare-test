import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormRowDayPicker from './FormRowDayPicker';

describe('FormRowDayPicker Component', () => {
  test('renders the label and date picker button', () => {
    render(<FormRowDayPicker label="Select Date Range" />);

    expect(screen.getByText('Select Date Range')).toBeInTheDocument();

    expect(screen.getByText('DD/MM/YYYY - DD/MM/YYYY')).toBeInTheDocument();
  });

  test('toggles the date picker on button click', async () => {
    render(<FormRowDayPicker label="Select Date Range" />);

    const toggleButton = screen.getByRole('button');

    expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByTestId('dialog')).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
  });

  test('handles date range selection', async () => {
    const user = userEvent.setup();
    render(<FormRowDayPicker label="Select Date Range" />);

    const toggleButton = screen.getByRole('button');

    await user.click(toggleButton);

    const firstDay = screen.getByText('1'); 
    const lastDay = screen.getByText('15'); 

    await user.click(firstDay);
    await user.click(lastDay);

    expect(screen.getByText(/01\/\d{2}\/\d{4} - 15\/\d{2}\/\d{4}/)).toBeInTheDocument();
  });

  test('closes the date picker when a range is selected', async () => {
    const user = userEvent.setup();
    render(<FormRowDayPicker label="Select Date Range" />);

    const toggleButton = screen.getByRole('button');

    await user.click(toggleButton);

    const firstDay = screen.getByText('1'); 
    const lastDay = screen.getByText('15');

    await user.click(firstDay);
    await user.click(lastDay);
    expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
  });
});
