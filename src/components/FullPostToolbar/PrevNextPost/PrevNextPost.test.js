import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PrevNextPost from "./PrevNextPost";
import {Icon} from 'semantic-ui-react';

configure({adapter: new Adapter});

describe('PrevNextPost component', () => {

    let wrapper = null;
    const mockPost = {
        slug: 'some-test',
        title: 'post title'
    };

    beforeEach(() => {
        wrapper = shallow(<PrevNextPost post={mockPost} />);
    });

    it('should render without crashing', () => {
        expect(wrapper.find('.PrevNext').length).toBe(1);
    });

    it('should contain <Icon name="chevron left" /> component when direction prop equals prev', () => {
        wrapper.setProps({direction: 'prev'});
        expect(wrapper.contains(<Icon name="chevron left" as="i" />)).toBeTruthy();
    });

    it('should contain <Icon name="chevron right" as="i" /> component when direction prop equals next', () => {
        wrapper.setProps({direction: 'next'});
        expect(wrapper.contains(<Icon name="chevron right" as="i" />)).toBeTruthy();
    });


});
