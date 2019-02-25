import React from 'react';
import {Button, Icon} from "semantic-ui-react";
import {isCallable} from "../../utils/utils";
import * as actionCreators from "../../store/actions";
import {connect} from "react-redux";
import './LoggedUserInfo.css';

const LoggedUserInfo = ({userStore, logOut}) => userStore && userStore.user && (
    <div className="LoggedUserInfo">
        <div className="user-data">{userStore.user.user_display_name}</div>
        <Button className="LogoutButton" icon onClick={event => isCallable(logOut) && logOut(event)}>
            <Icon name='power' />
        </Button>
    </div>
);

const mapStateToProps = state => ({
    userStore: state.user
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(actionCreators.logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedUserInfo);
