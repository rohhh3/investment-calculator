import Header from "./Header";
import Result from "./Result";
import UserInput from "./UserInput";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isInputValid =
    userInput.duration >= 1 &&
    userInput.initialInvestment >= 1 &&
    userInput.annualInvestment >= 1 &&
    userInput.expectedReturn >= 0;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //plus forces convertion
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!isInputValid && (
        <p className='error'>Please enter a value greater than zero.</p>
      )}
      {isInputValid && <Result input={userInput} />}
    </>
  );
}

export default App;
