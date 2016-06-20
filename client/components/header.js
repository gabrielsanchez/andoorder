import React from 'react';

const Header = React.createClass({

  render: function(){
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand">Ando Order</a>
          <button value="pause" onClick={() => this.props.clickHandler(true)} type="button" className="btn help-btn btn-default navbar-btn">Help</button>
        </div>
      </nav>

    );
  }
});

export default Header;
