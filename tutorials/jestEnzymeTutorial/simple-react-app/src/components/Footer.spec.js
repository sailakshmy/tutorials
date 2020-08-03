import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

const wrapper = shallow(<Footer/>);
it ('should render customer service number', ()=>{
    
    const span = wrapper.find('span');
    const textForSpan = span.text();
    const elementOrder = wrapper.find('hr+span').length;

    expect(textForSpan).toBe('Customer Service: 1-800-555-444');
    expect(elementOrder).toBe(1);
    
});

/*it('should have line before the span element',()=>{
    const wrapper = shallow(<Footer />);
    //const line = wrapper.find('hr');
    const elementOrder = wrapper.find('hr + span').length;

    expect(elementOrder).toBe(1);
})*/
