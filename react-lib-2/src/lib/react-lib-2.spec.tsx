import { render } from '@testing-library/react';

import ReactLib2 from './react-lib-2';

describe('ReactLib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLib2 />);
    expect(baseElement).toBeTruthy();
  });
});
