import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../../Components/Header/header'

describe('<Header/>', () => {
    it('renders properly', () => {
        const header= shallow(<Header />);
        expect(header.find('nav').exists()).toBeTruthy();
    })
})