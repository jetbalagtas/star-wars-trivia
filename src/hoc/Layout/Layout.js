import React, { Component } from 'react';

import classes from './Layout.css';
import Characters from '../../containers/Characters/Characters';
import Movies from '../../containers/Movies/Movies';

class Layout extends Component {
  render () {
    return (
      <div className={classes.Content}>
        <Characters />
        <Movies />
      </div>
    );
  }
}

export default Layout;
