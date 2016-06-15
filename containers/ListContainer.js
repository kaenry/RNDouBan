import React from 'react';
import {connect} from 'react-redux';
import List from '../pages/List';

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(List);
