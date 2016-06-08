import React from 'react';
import {connect} from 'react-redux';
import Profile from '../pages/Profile';

class ProfileContainer extends React.Component {
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

export default connect((state) => {
    const {Profile} = state;
    return {
        Profile
    }
})(ProfileContainer);
