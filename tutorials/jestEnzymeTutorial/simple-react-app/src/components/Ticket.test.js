import React from'react';
import {shallow} from 'enzyme';
import Ticket from './Ticket';

it ('should increment total value by 1 when clicked',()=>{
    const wrapper = shallow(<Ticket />);
    const initialTotal = wrapper.find('h2.total').text(); //This will be a string
    expect(initialTotal).toBe("0");
    const button = wrapper.find('button');
    button.simulate('click');
   // button.simulate('click');
    const finalTotal = wrapper.find('h2.total').text();
    expect(finalTotal).toBe("1");

});

it('should render the name in the title',()=>{
    const wrapper = shallow(<Ticket name={"Circus Tickets"} />);
    const title = wrapper.find("h2.title").text();
    expect(title).toBe('Circus Tickets');
    expect(title).not.toBe('Super Bowl Tickets');
})