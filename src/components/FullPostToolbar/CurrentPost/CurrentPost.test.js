import React from 'react';
import CurrentPost from "./CurrentPost";
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter});

describe('CurrentPost component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<CurrentPost />);
    });

    it('should render without crashing', () => {
        wrapper.setProps({postTitle: "test"});
        expect(wrapper.find('.CurrentPost').length).toBe(1);
    });

    it('should render nothing when postTitle prop is empty', () => {
        wrapper.setProps({postTitle: ""});
        expect(wrapper.find('.CurrentPost').length).toBe(0);
    });

});
