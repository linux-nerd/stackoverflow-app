describe('description', () => {
  it('should have description', () => {
    expect(1 + 2).toBe(3);
  });
});

// for action
// import { spy } from 'sinon';
// import * as actions from '../../app/actions/counter';

// describe('actions', () => {
//   it('should increment should create increment action', () => {
//     expect(actions.increment()).toMatchSnapshot();
//   });

//   it('should decrement should create decrement action', () => {
//     expect(actions.decrement()).toMatchSnapshot();
//   });

//   it('should incrementIfOdd should create increment action', () => {
//     const fn = actions.incrementIfOdd();
//     expect(fn).toBeInstanceOf(Function);
//     const dispatch = spy();
//     const getState = () => ({ counter: 1 });
//     fn(dispatch, getState);
//     expect(dispatch.calledWith({ type: actions.increment.type })).toBe(true);
//   });

//   it('should incrementIfOdd shouldnt create increment action if counter is even', () => {
//     const fn = actions.incrementIfOdd();
//     const dispatch = spy();
//     const getState = () => ({ counter: 2 });
//     fn(dispatch, getState);
//     expect(dispatch.called).toBe(false);
//   });

//   // There's no nice way to test this at the moment...
//   it('should incrementAsync', done => {
//     const fn = actions.incrementAsync(1);
//     expect(fn).toBeInstanceOf(Function);
//     const dispatch = spy();
//     fn(dispatch);
//     setTimeout(() => {
//       expect(dispatch.calledWith({ type: actions.increment.type })).toBe(true);
//       done();
//     }, 5);
//   });
// });


// for component
// import '../utils/enzymeConfig';

// import { spy } from 'sinon';
// import * as React from 'react';
// import { shallow } from 'enzyme';
// import Counter from '../../app/components/Counter';

// const CounterAny = Counter as any;

// function setup() {
//   const actions = {
//     increment: spy(),
//     incrementIfOdd: spy(),
//     incrementAsync: spy(),
//     decrement: spy()
//   };
//   const component = shallow(<CounterAny
//     counter={1} {...actions}
//   />);
//   return {
//     component,
//     actions,
//     buttons: component.find('button'),
//     p: component.find('.counter')
//   };
// }

// describe('Counter component', () => {
//   it('should should display count', () => {
//     const { p } = setup();
//     expect(p.text()).toMatch(/^1$/);
//   });

//   it('should first button should call increment', () => {
//     const { buttons, actions } = setup();
//     buttons.at(0).simulate('click');
//     expect(actions.increment.called).toBe(true);
//   });

//   it('should second button should call decrement', () => {
//     const { buttons, actions } = setup();
//     buttons.at(1).simulate('click');
//     expect(actions.decrement.called).toBe(true);
//   });

//   it('should third button should call incrementIfOdd', () => {
//     const { buttons, actions } = setup();
//     buttons.at(2).simulate('click');
//     expect(actions.incrementIfOdd.called).toBe(true);
//   });

//   it('should fourth button should call incrementAsync', () => {
//     const { buttons, actions } = setup();
//     buttons.at(3).simulate('click');
//     expect(actions.incrementAsync.called).toBe(true);
//   });
// });


// for containers
// import '../utils/enzymeConfig';

// import * as React from 'react';
// import { mount } from 'enzyme';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import CounterPage from '../../app/containers/CounterPage';
// import { IState } from '../../app/reducers';

// const CounterPageAny = CounterPage as any;
// let { configureStore, history } = require('../../app/store/configureStore');

// function setup(initialState?: IState) {
//   const store = configureStore(initialState);
//   const app = mount(
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <CounterPageAny />
//       </ConnectedRouter>
//     </Provider>
//   );
//   return {
//     app,
//     buttons: app.find('button'),
//     p: app.find('.counter')
//   };
// }

// describe('containers', () => {
//   describe('App', () => {
//     it('should display initial count', () => {
//       const { p } = setup();
//       expect(p.text()).toMatch(/^0$/);
//     });

//     it('should display updated count after increment button click', () => {
//       const { buttons, p } = setup();
//       buttons.at(0).simulate('click');
//       expect(p.text()).toMatch(/^1$/);
//     });

//     it('should display updated count after descrement button click', () => {
//       const { buttons, p } = setup();
//       buttons.at(1).simulate('click');
//       expect(p.text()).toMatch(/^-1$/);
//     });

//     it('shouldnt change if even and if odd button clicked', () => {
//       const { buttons, p } = setup();
//       buttons.at(2).simulate('click');
//       expect(p.text()).toMatch(/^0$/);
//     });

//     // it('should change if odd and if odd button clicked', () => {
//     //   const { buttons, p } = setup({ counter: 1 });
//     //   buttons.at(2).simulate('click');
//     //   expect(p.text()).toMatch(/^2$/);
//     // });
//   });
// });


// for reducers
// import counter from '../../app/reducers/counter';
// import { increment, decrement } from '../../app/actions/counter';

// describe('reducers', () => {
//   describe('counter', () => {
//     it('should handle initial state', () => {
//       expect(counter(undefined, { type: 'unknown' })).toBe(0);
//     });

//     it('should handle INCREMENT_COUNTER', () => {
//       expect(counter(1, increment())).toBe(2);
//     });

//     it('should handle DECREMENT_COUNTER', () => {
//       expect(counter(1, decrement())).toBe(0);
//     });

//     it('should handle unknown action type', () => {
//       expect(counter(1, { type: 'unknown' })).toBe(1);
//     });
//   });
// });


