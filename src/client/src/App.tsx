import React from 'react';
import useFetchData from './components/useFetchData';

function App() {
  const {data} = useFetchData();

  console.log(data)
  return (
    <div>
      {`boiler plate: ${data && data.message}`}
    </div>
  );
}

export default App;
