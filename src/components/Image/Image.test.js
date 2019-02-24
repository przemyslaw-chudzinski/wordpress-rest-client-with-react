import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from "./Image";

configure({adapter: new Adapter});

describe('Image component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Image source="http://placehold.it" title="test" alt="test" />);
    });

    it('should render without errors when correct source is passed', () => {
        expect(wrapper.find('img').length).toBe(1);
    });

    it('should render nothing when passed source is ""', () => {
        wrapper.setProps({source: ""});
        expect(wrapper.find('img').length).toBe(0);
    });

    it('should have alt="test" and title="test" if title and alt passed', () => {
        const {title, alt} = wrapper.children().props();
        expect(title).toBe("test");
        expect(alt).toBe("test");
    });

});
