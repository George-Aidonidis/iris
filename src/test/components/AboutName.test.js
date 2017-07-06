import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import AboutName from '../../components/about-name';

/* eslint  no-unused-expressions: "off" */
describe('<AboutName/>', () => {
  it('exists', () => {
    expect(AboutName).to.exist;
  });
  it('renders without crashing', () => {
    // how to test this?
    const wrapper = shallow(<AboutName />);
    expect(wrapper).to.have.length(1);
  });
});
