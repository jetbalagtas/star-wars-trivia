import React, { Component } from 'react';

import classes from './Layout.css';
import Viewer from '../../containers/Viewer/Viewer';

class Layout extends Component {
  render () {
    return (
      <div className={classes.Content}>
        <Viewer />
      </div>
    );
  };
};

export default Layout;
