import React from 'react';

const OrderDetail = React.createClass({
  render: function(props){
      return (
      <div className="thumbnail">
        <div className ="caption">
          <h2>order: {this.props.order.order_id}</h2>
          <h3>{this.props.order.customer_name}</h3>
          <ul className="list-group">
            <li className="list-group-item"><b>address: {this.props.order.address} </b></li>
            <li className="list-group-item"><b>courier: {this.props.order.courier}</b></li>
            <li className="list-group-item"><b>ETA: {this.props.order.eta}</b></li>
          </ul>
          <button id={this.props.order.order_id} value={this.props.order.order_id} className="btn btn-primary" onClick={this.props.clickHandler}>Remove</button>
        </div>
      </div>
    );
  }
});

export default OrderDetail;
