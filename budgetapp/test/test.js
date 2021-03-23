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
import { SharedRoute } from '../frontend/src/components/SharedRoute';
import { Route, MemoryRouter, Switch } from 'react-router-dom';

configure({adapter: new Adapter()});

const mockStore = configureMockStore([thunk]);

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe("Navbar", ()=>{
  let wrapper;
  const createWrapper = (conf)=>{
    const store = mockStore(conf || {});
    return mount(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar/>
        </MemoryRouter>
      </Provider>
    );
  };

  it('renders correctly', () => {
    wrapper = createWrapper({signup:{hasUserSession:false}});
    const tree = renderer
      .create(wrapper)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Sign Up when NOT logged in', ()=>{
    wrapper = createWrapper({signup:{hasUserSession:false}});
    expect(wrapper.containsMatchingElement(<Button className="nav-signup">Sign Up</Button>)).toEqual(true);
  });

  it('should NOT show Sign Up when logged in', ()=>{
    wrapper = createWrapper({signup:{hasUserSession:true}});
    expect(wrapper.containsMatchingElement(<Button className="nav-signup">Sign Up</Button>)).toEqual(false);
  });
});

describe("SharedRoute", ()=>{
  const createWrapper = (conf)=>{
    const store = mockStore(conf);
    return mount(
      <Provider store={store}>
        <MemoryRouter>
          <Switch>
            <SharedRoute path='*' userComponent={()=>(<Button>user</Button>)} component={()=>(<Button>anonymous</Button>)}/>
          </Switch>
        </MemoryRouter>
      </Provider>
    );
  };

  it('renders correctly when anonymous', () => {
    let wrapper = createWrapper({signup:{hasUserSession:false}});
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when logged in', () => {
    let wrapper = createWrapper({signup:{hasUserSession:true}});
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show up as user if logged in', ()=>{
    let wrapper = createWrapper({signup:{hasUserSession:true}});
    expect(wrapper.containsMatchingElement(<Button>user</Button>)).toEqual(true)
  });

  it('should show up as anonymous if not logged in', ()=>{
    let wrapper = createWrapper({signup:{hasUserSession:false}});
    expect(wrapper.containsMatchingElement(<Button>anonymous</Button>)).toEqual(true)
  });
});