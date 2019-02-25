import React from 'react';
import {Button, Icon} from "semantic-ui-react";
import {isCallable} from "../../utils/utils";
import * as actionCreators from "../../store/actions";
import {connect} from "react-redux";
import './LoggedUserInfo.css';

export const LoggedUserInfo = ({userStore, logOut}) => userStore && userStore.user && (
    <div className="LoggedUserInfo">
        {userStore.user.user_display_name && userStore.user.user_display_name.length ? <div className="user-data LoggedUserInfo__user-name">{userStore.user.user_display_name}</div> : null}
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
