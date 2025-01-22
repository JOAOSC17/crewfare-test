import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import Sidebar from './Sidebar';

describe('Sidebar Component', () => {
    const renderSidebar = (initialRoute: string) => {
        const router = createMemoryRouter(
          [
            {
              path: '/',
              element: <Sidebar />,
            },
            {
              path: '/detail',
              element: <Sidebar />,
            },
            {
              path: '/dates',
              element: <Sidebar />,
            },
          ],
          { initialEntries: [initialRoute] }
        );
    
    render(<RouterProvider router={router} />);
    }

  test('renders the sidebar with steps', () => {
    renderSidebar('/');

    expect(screen.getByText('Create Event')).toBeInTheDocument();

    expect(screen.getByText('Basic Information')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Dates')).toBeInTheDocument();
  });

  test('highlights the active step based on the current route', () => {
    renderSidebar('/detail');

    const activeStep = screen.getByText('Details').closest('div');
    expect(activeStep).toHaveClass('text-white');
  });

  test('inactive steps do not have active classes', () => {
    renderSidebar('/detail');

    const inactiveStep = screen.getByText('Basic Information');
    expect(inactiveStep).not.toHaveClass('text-white');
  });

  test('completed steps have correct icon and style', () => {
    renderSidebar('/dates');

    const completedIcon = screen.queryAllByTestId('completed')
    expect(completedIcon).toHaveLength(0);
  });
});
