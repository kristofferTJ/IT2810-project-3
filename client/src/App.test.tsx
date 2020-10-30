import React from 'react';
import App from './App';
import StartPage from './Pages/StartPage';
import MainPage from './Pages/MainPage';
import { mount} from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import rootReducer from './store/rootReducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

jest.mock('react-redux', () => ({
    useDispatch: () => { },
    useSelector: () => mockData
  }));

  let mockData = 'Test';
  let component;
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  const middlewares = [thunk];

test('should show Home component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialentries={['/']}>
         <Provider store={store}>
          <App />
          </Provider>
     </MemoryRouter>
    );
    expect(component.find(StartPage)).toHaveLength(1);
  })

test('should show Home component for / router (using memory router)', () => {

    const component = mount(<MemoryRouter initialentries={['/Restaurants']}>
        <App/>
     </MemoryRouter>
    );
    expect(component.find(MainPage)).toHaveLength(1);
  })


  // test('landing on a bad page', () => {
  //   const history = createMemoryHistory()
  //   history.push('/Restaurants')
  //   render(
  //     <Router history={history}>
  //       <App />
  //     </Router>
  //   )