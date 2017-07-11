import { expect } from 'chai';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import AboutName from '../../components/about-name';

const props = {
  match: {
    params: {
      account: '1'
    }
  }
};
/* eslint  no-unused-expressions: "off" */
describe('<AboutName/>', () => {
  it('exists', () => {
    expect(AboutName).to.exist;
  });
  it('renders without crashing', () => {
    // how to test this?
    const wrapper = shallow(
      <MemoryRouter>
        <AboutName {...props} />
      </MemoryRouter>
    );
    expect(wrapper).to.have.length(1);
  });
});
