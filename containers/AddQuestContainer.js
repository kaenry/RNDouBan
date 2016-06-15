import React from 'react';
import {connect} from 'react-redux';
import AddQuest from '../pages/AddQuest';

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(AddQuest);
