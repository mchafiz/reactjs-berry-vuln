import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VulnerableComponent from './VulnerableComponent';

describe('VulnerableComponent', () => {
  it('renders the component with vulnerabilities', () => {
    render(<VulnerableComponent />);

    // Check if the hardcoded secret is rendered
    const secretElement = screen.getByText(/12345-ABCDE-SECRET-KEY/i);
    expect(secretElement).toBeInTheDocument();
  });
});
