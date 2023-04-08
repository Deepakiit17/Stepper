import React from 'react';
import './App.css';
import PaymentForm from './Component/PaymentForm';
import Paytm from './Component/Paytm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <PaymentForm />
          <Paytm />
        </p>
        
      </header>
    </div>
  );
}

export default App;
