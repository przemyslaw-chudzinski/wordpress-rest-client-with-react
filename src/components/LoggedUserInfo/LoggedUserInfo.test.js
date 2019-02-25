import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LoggedUserInfo} from "./LoggedUserInfo";
import sinon from 'sinon';
import {Button} from "semantic-ui-react";

configure({adapter: new Adapter});

describe('LoggedUserInfo component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<LoggedUserInfo />)
    });

    it('should render without crashing', () => {
        wrapper.setProps({userStore: {user: {user_display_name: 'test name'}}});
        expect(wrapper.find('.LoggedUserInfo').length).toBe(1);
    });

    it('should render nothing without crashing when userStore is not available', () => {
        expect(wrapper.find('.LoggedUserInfo').length).toBe(0);
    });

    it('should render user name when userStore contains user_display_name', () => {
        wrapper.setProps({userStore: {user: {user_display_name: 'test name'}}});
        expect(wrapper.find('.LoggedUserInfo__user-name').length).toBe(1);
    });

    it('should not render user name when userStore doesnt contain user_display_name or user_display_name length equals 0', () => {
        wrapper.setProps({userStore: {user: {user_display_name: ''}}});
        expect(wrapper.find('.LoggedUserInfo__user-name').length).toBe(0);
    });

    it('should call logOut prop when logOut prop is available and callable', () => {
        const logOut = sinon.spy();
        wrapper.setProps({userStore: {user: {user_display_name: 'some user'}}, logOut});
        wrapper.find(Button).simulate('click');
        expect(logOut.callCount).toBe(1);
    });

    it('should not call logOut prop when logOut prop is not available or not callable', () => {
        const logOut = sinon.spy();
        wrapper.setProps({userStore: {user: {user_display_name: 'some user'}}});
        wrapper.find(Button).simulate('click');
        expect(logOut.callCount).toBe(0);
    });

});
