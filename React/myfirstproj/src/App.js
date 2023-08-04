
import './App.css';
import Home from './component/Home ';

function App() {
  const heading = "My First React Application"
  // eslint-disable-next-line no-unused-vars
  const fruits = ["Apple","Banana","Orange","Mango"]

  return (
    <div className="Sam">
      <Home title={heading} />
      <h1>My Fruits</h1>
      <ul>
        {    //java script canbe written in HTml with curly brackets 

        fruits.map((fruits,index)=> (
        <li key= {index}>{fruits}</li>
         ))
         }
       </ul>


    </div>
  );
}

export default App;