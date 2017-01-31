import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Movie from './Movie.jsx';

describe('<Movie />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Movie />);
    expect(wrapper.find('div')).to.have.length(1);
  });

  // it('should trigger our logStuff function', () => {
  //   const logStuff = sinon.spy();
  //   const wrapper = mount(<Button handleClick={logStuff} />);
  //   wrapper.simulate('click');
  //   expect(logStuff.calledOnce).to.equal(true);
  // });
});
