import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CategoryHeader} from "./CategoryHeader";

configure({adapter: new Adapter});

describe('CategoryHeader component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<CategoryHeader />)
    });

    it('should render without crashing', () => {
        expect(wrapper.find('.CategoryHeader').length).toBe(1);
    });

    it('should not render image when image is not passed', () => {
        expect(wrapper.find('img').length).toBe(0);
    });

    it('should render image when image is passed', () => {
        wrapper.setProps({imageUrl: 'http://placehold.it/300x400'});
        expect(wrapper.find('img').length).toBe(1);
    });

    it('should not render description when description prop is not passed', () => {
        expect(wrapper.find('.CategoryHeader__description').length).toBe(0);
    });

    it('should render description when description prop is passed', () => {
        wrapper.setProps({description: 'some desc'});
        expect(wrapper.find('.CategoryHeader__description').length).toBe(1);
    });

    it('should not render title when title prop is not passed', () => {
        expect(wrapper.find('.CategoryHeader__title').length).toBe(0);
    });

    it('should render title when title prop is passed', () => {
        wrapper.setProps({title: 'some title'});
        expect(wrapper.find('.CategoryHeader__title').length).toBe(1);
    });

});
