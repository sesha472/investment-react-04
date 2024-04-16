import React from "react";

const Userinput = ({ userInput, inpuchangeHndler }) => {
  
  
  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>intial investment</label>
          <input
            type="number"
            name="intialInvestment"
            defaultValue={userInput.intialInvestment}
            onClick={(event) =>
              inpuchangeHndler("intialInvestment", event.target.value)
          
            }
            />
          
        </p>
        <p>
          <label>anuval investment</label>
          <input
            type="number"
            required
            name="anuvalINvestment"

            defaultValue={userInput.anuvalINvestment}
            onClick={(event) =>
              inpuchangeHndler("anuvalINvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            name="expectedReturn"
            defaultValue={userInput.expectedReturn}
            onClick={(event) =>
              inpuchangeHndler("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>duration </label>
          <input
            type="number"
            required
            name="duration"
            defaultValue={userInput.duration}
            onClick={(event) =>
              inpuchangeHndler("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>  
  );
};

export default Userinput;
