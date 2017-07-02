import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import About from '../../components/about';

/* eslint  no-unused-expressions: "off" */
describe('<About/>', () => {
  it('exists', () => {
    expect(About).to.exist;
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).to.have.length(1);
  });
});
