import React,{ useState } from "react";
import Header from "./components/Header"
import Userinput from "./components/Userinput"
import Results from "./components/Results";

function App() {
  const [userInput, setuserInput] = useState({
    intialInvestment:15000,
    anuvalINvestment:1200,
    expectedReturn:6,
    duration:10
   });
  
  const isdurationisValid=userInput.duration >=1
   

   const inpuchangeHndler=(intialkey,eventvalue)=>{
    setuserInput(prevstate=>{
      return({
        ...prevstate,
        [intialkey]: +eventvalue,
      });
    })
  }
  
  return (
    <>
      <Header />
      <Userinput userInput={userInput} inpuchangeHndler={inpuchangeHndler} />
      {!isdurationisValid && (
        <p className="center">input duration shoud be graterthen 1</p>
      )}
      {isdurationisValid && <Results userInput={userInput} />}
    </>
  );
}

export default App
