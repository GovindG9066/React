import LikeBtn from './Activity2LikeBtn';
import AmazonActivity from './AmazonActivity';
import './App.css'
import ClickEvents from './ClickEvents';
import Counter from './counter';
import LudoGame from './LudoGame';
import LudoGame2 from './LudoGame2';
import MsgBox from './MsgBox';
import Arr from './arr';

import NewProduct from './newProduct';

// import Title from './Title';
// import Mul from './UsingOfCurlyBreses';
// import ProductTab from './ProductTab';

// import Item from './item';

function App() {

  return (
    
      <>
          <MsgBox username="Govind" textcolor="red"/>
          <MsgBox username="Sanika" textcolor="blue"/>
          <MsgBox username="Tushar" textcolor="green"/>
     

          <NewProduct name="Carrot" image="/Carrots.png" desc="This is the fresh carrots" amount={20} />
          <NewProduct name="Carrot" image="/Carrots.png" desc="This is the fresh carrots" amount={200} />
          <NewProduct name="Carrot" image="/Carrots.png" desc="This is the fresh carrots" amount={250} />
          <NewProduct name="Carrot" image="/Carrots.png" desc="This is the fresh carrots" amount={120} />
        

          <div>
            <AmazonActivity/>
          </div>

          <div>
            <ClickEvents/>
          </div>

          <div>
            <Counter/>
          </div>

          <div>
            <LikeBtn/>
          </div>

          <div>
            <LudoGame/>
          </div>

          <div>
            <LudoGame2/>
          </div>

          <div>
            <Arr/>
          </div>

       </>

      
    
  );
          
}

export default App
