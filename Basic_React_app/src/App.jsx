import './App.css'

// import Title from './Title';
// import Mul from './UsingOfCurlyBreses';
import ProductTab from './ProductTab';

function Descriptions(){
  return(
    <p>Hello I am the desc form the App.jsx</p>
  );
}

function App() {

  return (
    <>
        {/* <Title />
        <Descriptions />
        <Title />
        <Descriptions />
        <Mul /> */}

          <ProductTab />
    </>
  );
          
}

export default App
