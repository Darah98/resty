import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../../Components/Form/form';

describe('<Form />', () => {
    it('renders properly', () => {
        const form = shallow(<Form />);
        expect(form.find('button').exists()).toBeTruthy();
    });
    it('responds to user\'s url change', () => {
        const form = mount(<Form/>);
        const inpURL = form.find('#url');
        inpURL.simulate('change', {target: {value: 'link.url'}});
        expect(form.state('url')).toEqual('link.url');
    });
    it('responds to user\'s method change', () => {
        const form = mount(<Form/>);
        const inpMethod = form.find('#get');
        inpMethod.simulate('click',{ target: { id: 'get' } });
        expect(form.state('method')).toEqual('get');
    });
    it('resets form fields', () => {
        const form = mount(<Form/>);
        form.find('button').simulate('submit');
        expect(form.state('method')).toEqual('');
        expect(form.state('url')).toEqual('');
        expect(form.find('div').html()).toEqual('<div id="formResult"><span></span><span></span></div>');
    });
});