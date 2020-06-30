import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../Components/Header/header';

describe('<Header/>', () => {
    it('renders properly', () => {
        const header= shallow(<Header />);
        expect(header.find('nav').exists()).toBeTruthy();
    });
});