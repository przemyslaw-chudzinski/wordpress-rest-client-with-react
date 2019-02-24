import React from 'react';
import {shallow,configure} from 'enzyme';
import Footer from "./Footer";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter});

describe('Footer', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Footer/>)
    });

    it('renders without crashing', () => {
        expect(wrapper.find('.Footer').length).toBe(1);
    });

});
