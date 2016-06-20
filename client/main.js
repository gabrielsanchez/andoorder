import React from 'react';
import ReactDOM from 'react-dom';
import OrderList from './components/order_list'

const App = () => {
  return (
    <div>
      <OrderList />
    </div>
  );
};

Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
