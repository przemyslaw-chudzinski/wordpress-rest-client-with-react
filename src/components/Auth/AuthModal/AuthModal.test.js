import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthModal from "./AuthModal";
import {Modal} from "semantic-ui-react";

configure({adapter: new Adapter});

describe('AuthModal component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<AuthModal/>)
    });

    it('should render without crashing', () => {
        expect(wrapper.find(Modal).length).toBe(1);
    });

});
