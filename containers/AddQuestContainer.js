import React from 'react';
import {connect} from 'react-redux';
import AddQuest from '../pages/AddQuest';

class AddQuestContainer extends React.Component {
    render() {
        return (
            <AddQuest {...this.props} />
        )
    }
}

export default connect((state) => {
    const {AddQuest} = state;
    return {
        AddQuest
    }
})(AddQuestContainer);
