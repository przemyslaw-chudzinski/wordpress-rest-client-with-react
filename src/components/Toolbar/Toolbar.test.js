import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Toolbar} from "./Toolbar";
import {NavLink} from "react-router-dom";
import LoggedUserInfo from "../LoggedUserInfo/LoggedUserInfo";

configure({adapter: new Adapter});

describe('Toolbar component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Toolbar />);
    });

    it('should render without crashing', () => {
        expect(wrapper.find('.Toolbar').length).toBe(1);
    });

    it('should have 1 NavItem component when pages number equals 0', () => {
        expect(wrapper.find(NavLink).length).toBe(1);
    });

    it('should have 2 NavItem component when pages number equals 1', () => {
        const pages = [
            {
                id: 1,
                slug: 'test',
                title: {rendered: 'title'}
            }
        ];
        wrapper.setProps({pages});
        expect(wrapper.find(NavLink).length).toBe(2);
    });

    it('should have LoggedUserInfo component', () => {
        expect(wrapper.find(LoggedUserInfo).length).toBe(1);
    });

});
