import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider, useDispatch as useDispatchMock } from 'react-redux';
import React, { useState as useStateMock } from 'react';
import configureMockStore from 'redux-mock-store';

import Navbar from '../frontend/src/components/layout/navbar/Navbar';
import {Button} from '../frontend/src/components/layout/navbar/Button';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

const mockStore = configureMockStore([thunk]);

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe("Navbar", ()=>{
  let wrapper;
  const createWrapper = ()=>{
    const store = mockStore({});
    return mount(
      <Provider store={store}>
        <Navbar/>
      </Provider>
    );
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(createWrapper())
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show up', ()=>{
    wrapper = createWrapper();
    expect(wrapper.containsMatchingElement(<Button className="nav-signup">Sign Up</Button>)).toEqual(true);
  });
});
