import { render } from '@testing-library/react';

import ReactLib1 from './react-lib-1';

describe('ReactLib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib1 />);
    expect(baseElement).toBeTruthy();
  });
});
