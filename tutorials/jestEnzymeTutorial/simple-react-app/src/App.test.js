import React from 'react';
import {shallow} from 'enzyme';
import { render } from '@testing-library/react';
import App from './App';
import Ticket from './components/Ticket';
import Footer from './components/Footer';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();

});

it('should render Ticket component',()=>{
  const wrapper = shallow(<App />);
  const ticket = wrapper.find(Ticket,("Super Bowl Tickets"));
  expect(ticket.exists()).toBe(true);
  expect(ticket.prop('name')).toBe("Super Bowl Tickets");
  const footer = wrapper.find(Footer);
  expect(footer.exists()).toBe(true);
})