import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {ToolbarToggleButton} from "./ToolbarToggleButton";
import {Icon} from 'semantic-ui-react';

configure({adapter: new Adapter});

describe('ToolbarToggleButton', () => {

    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<ToolbarToggleButton />);
    });

    it('should render without errors', () => {
        expect(wrapper.find('.ToolbarToggleButton').length).toBe(1);
    });

    it('should contain <Icon name="angle up" className="icon-btn"/> when open prop is false', () => {
        expect(wrapper.contains(<Icon name="angle up" className="icon-btn"/>)).toBeTruthy();
    });

    it('should contain <Icon name="close" className="icon-btn"/> when open prop is true', () => {
        wrapper.setProps({open: true});
        expect(wrapper.contains(<Icon name="close" className="icon-btn"/>)).toBeTruthy();
    });

    it('should call clickCallback prop when clickCallback is passed', () => {
        const clickCallback = sinon.spy();
        wrapper.setProps({clickCallback});
        wrapper.find('.ToolbarToggleButton').simulate('click');
        expect(clickCallback.callCount).toBe(1);
    });

    it('should not call clickCallback prop when clickCallback is not passed', () => {
        const clickCallback = sinon.spy();
        wrapper.find('.ToolbarToggleButton').simulate('click');
        expect(clickCallback.callCount).toBe(0);
    });


});
