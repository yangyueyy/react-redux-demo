import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter);
function render() {
  ReactDOM.render(
      <Counter
          value={store.getState()}
          onAdd={()=>store.dispatch({type:'ADD'})}
      />,document.getElementById('root')
  )
}
render();
store.subscribe(render);