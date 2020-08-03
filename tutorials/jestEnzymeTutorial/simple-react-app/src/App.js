import React from 'react';
import Ticket from './components/Ticket';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Ticket name= {"Super Bowl Tickets"} />
      <Footer /> 
    </div>
  );
}

export default App;
