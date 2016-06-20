import React from 'react';
import OrderDetail from './order_detail';
import Header from './header';
import {name, address} from 'faker'

const OrderList = React.createClass({

  getInitialState: function(){
      return {
        orders:  [],
        fakeOrder: false,
        order_count: 0
      }
  },

  addFakeOrders: function(pause){

    if(!pause){
      fakeOrderGen = setInterval(this.addOrder, 5000);
    }else{
      if(confirm("do you want to stop the kitchen?"))
        clearInterval(fakeOrderGen);
    }

  },

  addOrder: function (e){
    this.setState({order_count: this.state.order_count + 1});
    this.setState({
        orders: this.state.orders.concat(
          {
            order_id: this.state.order_count,
            customer_name: name.firstName(),
            address: address.streetAddress(),
            courier: name.firstName(),
            eta: parseInt(Math.random(3)*100).toString().concat(" minutes")
          }
        )
    });
  },

  removeOrder: function (e){
    this.setState({orders: this.state.orders.filter(function(el) { return el.order_id != e.target.value; })});
  },

  componentDidMount: function(){
    if(!this.state.fakeOrder){
      var fakeOrderGen = null;
      this.addFakeOrders();
      this.setState({fakeOrder:true});
    }
  },

  render: function() {
    const clickHandler = this.removeOrder
    const RenderedOrders = this.state.orders.map(function(order){
        return <OrderDetail key={order.order_id} order={order} clickHandler={clickHandler} />;
    });

    return (
      <div>
        <Header clickHandler={this.addFakeOrders} />
        <div className="order-list">
             {RenderedOrders}
        </div>
      </div>
    );
  }
});

export default OrderList;
