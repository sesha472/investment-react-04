import { useState } from "react";
import Header from "./components/Header"
import Userinput from "./components/Userinput"
import Results from "./components/Results";

function App() {
  const [userInput, setuserInput] = useState({
    intialInvestment:10000,
    anuvalINvestment:1200,
    expectedReturn:6,
    duration:10
   });
  
   const inpuchangeHndler=(intialkey,eventvalue)=>{
    setuserInput(prevstate=>{
      return({
        ...prevstate,
        [intialkey]: +eventvalue,
      })
    })
  }

  return (
    <>
    <Header/>
    <Userinput userInput={userInput} inpuchangeHndler={inpuchangeHndler}/>
    <Results userInput={userInput}/>
    </>
    
  )
}

export default App
