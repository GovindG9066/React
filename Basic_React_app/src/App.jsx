import './App.css'
import Title from './Title';


function Descriptions(){
  return(
    <p>Hello I am the desc form the App.jsx</p>
  );
}

function App() {

  return (
    <div>
        <Title />
        <Descriptions />
        <Title />
        <Descriptions />
    </div>
  );
          
}

export default App
