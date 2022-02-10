import React from 'react';

import { shallow } from 'enzyme';

import IndexPage from '../../pages/index';

jest.mock('../../components/Layout');

describe('<IndexPage/>', () => {
  it('render correctly', () => {
    const tree = shallow(<IndexPage />);
    expect(tree.exists()).toBe(true);
  });
});
