import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './../../routes';

/* eslint  no-unused-expressions: "off" */
describe('<Routes/>', () => {
  const wrapper = shallow(<Routes />);
  it('exists', () => {
    expect(Routes).to.exist;
  });
  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
    expect(wrapper.find(Router)).to.have.length(1);
  });
  it('has at least one Route component', () => {
    expect(wrapper.find(Route)).length.to.be.at.least(1);
  });
});
