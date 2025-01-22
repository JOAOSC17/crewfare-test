import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BannerUploader from './BannerUploader';

describe('BannerUploader Component', () => {
    beforeAll(() => {
        global.URL.createObjectURL = jest.fn(() => 'mock-image-url');
      });
    
      afterAll(() => {
        global.URL.createObjectURL = jest.fn();
      });
  test('renders the default state with upload prompt', () => {
    render(<BannerUploader />);
    expect(screen.getByText('Click or drop image')).toBeInTheDocument();
  });

  test('renders the uploaded image preview', () => {
    render(<BannerUploader />);

    const file = new File(['test-image'], 'test-image.png', { type: 'image/png' });
    const input = screen.getByTestId('download');

    fireEvent.change(input, { target: { files: [file] } });

    const img = screen.getByRole('img', { hidden: false });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src');
  });

  test('removes the image preview when no file is selected', () => {
    render(<BannerUploader />);

    const file = new File(['test-image'], 'test-image.png', { type: 'image/png' });
    const input = screen.getByTestId('download');

    fireEvent.change(input, { target: { files: [file] } });

    fireEvent.change(input, { target: { files: [] } });

    expect(screen.getByText('Click or drop image')).toBeInTheDocument();
  });
});
