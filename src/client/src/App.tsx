import React from 'react';
import './App.css';
import useFetchData from './components/useFetchData';

function App() {
  const {data} = useFetchData();

  return (
    <div>
      {"boiler plate"}
    </div>
  );
}

export default App;
