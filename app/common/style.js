import {StyleSheet} from 'react-native';

const blue  = '#4078c0';
const red   = '#FF7473';
const grey  = '#CDCDCD';
const white = '#fff';

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    valignCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    redBtn: {
        borderColor: red,
        backgroundColor: red,
        borderRadius: 2
    },
    blueBtn: {
        borderColor: blue,
        backgroundColor: blue,
        borderRadius: 2
    },
    whiteText: {
        color: white,
    },
    blueText: {
        color: blue,
    },
    redText: {
        color: red,
    },
    bgWhite: {
        backgroundColor: white,
    },
    p10: {
        padding: 10,
    },
    p16: {
        padding: 16,
    },
    mt1: {
        marginTop: 1,
    },
    m10: {
        margin: 10,
    },
    mt10: {
        marginTop: 10,
    },
    abouts: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    about: {
        backgroundColor: '#4ea1d3',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 4,
        paddingBottom: 4,
        marginRight: 4,
        marginBottom: 2,
        marginTop: 2,
        borderRadius: 4,
    },
    aboutText: {
        color: '#fff',
        fontSize: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    input: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    }
})

export default style;