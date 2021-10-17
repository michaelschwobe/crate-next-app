import { render, screen, fireEvent } from '../../.jest/jest.setup';
import Home from '../../src/pages/index';

// -----------------------------------------------------------------------------

describe('Home', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('clicking button triggers alert', () => {
    render(<Home />);
    window.alert = jest.fn();
    fireEvent.click(screen.getByText('Test Button'));
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
  });
});
