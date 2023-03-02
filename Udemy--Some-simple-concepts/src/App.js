import "./App.css";
import ChangeText from "./changeText";
import DynCont from "./DynCont";
import UserData from "./UserData";
import CardList from "./card-list";



function App() {
  

  return (
   <div className="App">
   <h1 >The text change component</h1>
    <ChangeText/>
    <h2>Dynamic content using arrow of objects</h2>
    <DynCont></DynCont>
    <h1>User Data API fro the jsonholder API</h1>
    <UserData></UserData>
    <h2>here u will see the card component</h2>
    <CardList></CardList>

    {/* just some testing containers */}
    <div className="container2">
         <div className="box">
            <span />
            <div className="content">
              <h2>Pankaj kumar</h2>
              <p>Email : pk497243@gmail.com</p>
              <p>Id : Pankaj</p>
              <a href="#">Read More</a>
            </div>
          </div>
         <div className="box">
            <span />
            <div className="content">
              <h2>Pankaj kumar</h2>
              <p>Email : pk497243@gmail.com</p>
              <p>Id : Pankaj</p>
              <a href="#">Read More</a>
            </div>
          </div>
      </div>
  
   </div>
  );
}

export default App;
