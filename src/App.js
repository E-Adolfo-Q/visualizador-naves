import React from 'react';
import SelectedShip from './components/SelectedShip';
import ResultsDetail from './components/ResultsDetail';

const App = () => {
  return (
   <main className="mainClass">
     <SelectedShip
        defaultText="Seleccione una nave...."  
     />
     <ResultsDetail />
   </main> 
  );
}

export default App;
