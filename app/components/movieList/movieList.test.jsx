import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MovieList from './MovieList.jsx';

describe('<Movie />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<MovieList />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
