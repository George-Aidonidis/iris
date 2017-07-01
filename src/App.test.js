import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<App/>', () => {
  it('exists', () => {
    expect(App).to.exist;
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.length(1);
  });
});
