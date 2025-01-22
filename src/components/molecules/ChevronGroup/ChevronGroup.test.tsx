import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChevronGroup from './ChevronGroup';

describe('ChevronGroup Component', () => {
  test('renders ChevronLeft and ChevronRight buttons', () => {
    render(<ChevronGroup />);

    expect(screen.getByRole('button', { name: /chevronLeft/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /chevronRight/i })).toBeInTheDocument();
  });

  test('calls the previously function when ChevronLeft is clicked', () => {
    const mockPreviously = jest.fn();
    render(<ChevronGroup previously={mockPreviously} />);

    const leftButton = screen.getByRole('button', { name: /chevronLeft/i });
    fireEvent.click(leftButton);

    expect(mockPreviously).toHaveBeenCalledTimes(1);
  });

  test('calls the foward function when ChevronRight is clicked', () => {
    const mockFoward = jest.fn();
    render(<ChevronGroup foward={mockFoward} />);

    const rightButton = screen.getByRole('button', { name: /chevronRight/i });
    fireEvent.click(rightButton);

    expect(mockFoward).toHaveBeenCalledTimes(1);
  });

  test('disables ChevronLeft button when disabledLeft is true', () => {
    render(<ChevronGroup disabledLeft={true} />);

    const leftButton = screen.getByRole('button', { name: /chevronLeft/i });
    expect(leftButton).toBeDisabled();
  });

  test('disables ChevronRight button when disabledRight is true', () => {
    render(<ChevronGroup disabledRight={true} />);

    const rightButton = screen.getByRole('button', { name: /chevronRight/i });
    expect(rightButton).toBeDisabled();
  });
});
