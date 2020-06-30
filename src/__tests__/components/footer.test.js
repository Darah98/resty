import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../../Components/Footer/footer';

describe('<Footer />', () => {
    it('renders properly', () => {
        const footer= shallow(<Footer />);
        expect(footer.find('p').exists()).toBeTruthy();
    });
});