import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import App from '../../App';

/* eslint  no-unused-expressions: "off" */
describe('<App/>', () => {
  it('exists', () => {
    expect(App).to.exist;
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.length(1);
  });
});
