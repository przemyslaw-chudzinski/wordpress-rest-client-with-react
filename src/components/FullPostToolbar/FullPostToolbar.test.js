import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {FullPostToolbar} from "./FullPostToolbar";
import {PrevNextPost} from "./PrevNextPost/PrevNextPost";
import CurrentPost from "./CurrentPost/CurrentPost";
import {ToolbarToggleButton} from "./ToolbarToggleButton/ToolbarToggleButton";

configure({adapter: new Adapter});

describe('FullPostToolbar', () => {

    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<FullPostToolbar/>)
    });

    it('should render without crashing', () => {
        expect(wrapper.find('.FullPostToolbar').length).toBe(1);
    });

    it('should have 2 x PrevNextPost component', () => {
        expect(wrapper.find(PrevNextPost).length).toBe(2);
    });

    it('should have CurrentPost component', () => {
        expect(wrapper.find(CurrentPost).length).toBe(1);
    });

    it('should have ToolbarToggleButton component', () => {
        expect(wrapper.find(ToolbarToggleButton).length).toBe(1);
    });

    it('should have FullPostToolbarOpen css class when show prop equals true', () => {
        wrapper.setProps({show: true});
        expect(wrapper.find('.FullPostToolbarOpen').length).toBe(1);
    });

    it('should have FullPostToolbarClosed css class when show prop equals false', () => {
        expect(wrapper.find('.FullPostToolbarClosed').length).toBe(1);
    });

    it('should call showFullPostToolbarButton function when this function reference is passed', () => {
        const showFullPostToolbarButton = sinon.spy();
        wrapper.setProps({showFullPostToolbarButton});
        wrapper.find(ToolbarToggleButton).prop('clickCallback')();
        expect(showFullPostToolbarButton.callCount).toBe(1);
    });

    it('should not call showFullPostToolbarButton function when this function reference is not passed', () => {
        const showFullPostToolbarButton = sinon.spy();
        wrapper.find(ToolbarToggleButton).prop('clickCallback')();
        expect(showFullPostToolbarButton.callCount).toBe(0);
    });

    it('should call goToPost when goToPost is passed as function reference', () => {
        const goToPost = sinon.spy();
        wrapper.setProps({goToPost});
        wrapper.find(PrevNextPost).at(0).prop('goToPost')();
        wrapper.find(PrevNextPost).at(1).prop('goToPost')();
        expect(goToPost.callCount).toBe(2);
    });

});


