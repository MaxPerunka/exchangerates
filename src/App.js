import { useState } from 'react';
import './App.css';

const URL= 'https://api.exchangerate.host/latest'

function App() {
  const [eur,setEur] = useState(0);
  const [gbp,setGbp] = useState(0);
  const [rate,setRate] = useState(0);

  return (
    <div id="container">

    </div>
  );
}

export default App;
