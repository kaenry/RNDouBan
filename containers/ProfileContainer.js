import React from 'react';
import {connect} from 'react-redux';
import Profile from '../pages/Profile';

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(Profile);
