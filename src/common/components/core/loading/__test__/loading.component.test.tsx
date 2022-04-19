import { render } from '@testing-library/react';

import { Loading } from '../loading.component';

describe('<Loading />', () => {
  it('renders and matches the snapshot', () => {
    const { container } = render(<Loading />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
