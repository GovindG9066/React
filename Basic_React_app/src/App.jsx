import './App.css'

import NewProduct from './newProduct';

// import Title from './Title';
// import Mul from './UsingOfCurlyBreses';
// import ProductTab from './ProductTab';

// import Item from './item';

function App() {

  return (
    
     
       <>

          <NewProduct name="Carrot" image="/Carrots.png" desc="This is the fresh carrots" amount={20} />
          <NewProduct name="Carrot" image="/Carrots.png" desc="This is the fresh carrots" amount={200} />
          <NewProduct name="Carrot" image="/Carrots.png" desc="This is the fresh carrots" amount={250} />
          <NewProduct name="Carrot" image="/Carrots.png" desc="This is the fresh carrots" amount={120} />
        
      
       </>
      
    
  );
          
}

export default App
