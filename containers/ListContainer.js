import React from 'react';
import {connect} from 'react-redux';
import List from '../pages/List';

class ListContainer extends React.Component {
    render() {
        return (
            <List {...this.props} />
        )
    }
}

export default connect((state) => {
    // const {List} = state;
    return {
        state: state
    }
})(ListContainer);
