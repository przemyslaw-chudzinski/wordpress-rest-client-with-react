import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Comments} from "./Comments";
import {Message} from "semantic-ui-react";
import {LoadMoreButton} from "../LoadMoreButton/LoadMoreButton";
import CommentsList from "./CommentsList/CommentsList";
import AddCommentForm from "./AddCommentForm/AddCommentForm";


configure({adapter: new Adapter});

describe('Comments component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Comments postId={1} />);
    });

    it('should render without crashing when disabled prop is false', () => {
        expect(wrapper.find('.Comments').length).toBe(1);
    });

    it('should render without crashing Message component when disabled prop is true', () => {
        wrapper.setProps({disabled: true});
        expect(wrapper.find(Message).length).toBe(1);
    });

    it('should render LoadMoreButton component when showCommentsList state is false', () => {
        expect(wrapper.find(LoadMoreButton).length).toBe(1);
    });

    it('should render CommentsList component when showCommentsList state is true', () => {
        wrapper.setProps({userStore: {user: {user_display_name: 'some user'}}});
        wrapper.setState({showCommentsList: true});
        expect(wrapper.find(CommentsList).length).toBe(1);
        expect(wrapper.find(AddCommentForm).length).toBe(1);
    });

    describe('handleLoadMore method', () => {

        it('should increment pageNumber state when handleLoadMore method has been called', () => {
            wrapper.setState({pageNumber: 1});
            wrapper.instance().handleLoadMore();
            expect(wrapper.state('pageNumber')).toBe(2);
        });

        it('should get comments list when handleLoadMore method has been called', async () => {

            // TODO: How to test http calls inside of the methods of the component

        });

    });

});
