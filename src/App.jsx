import Header from "./Header";
import Result from "./Result";
import UserInput from "./UserInput";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestement: 10000,
    annualInvestement: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      <Result input={userInput} />
    </>
  );
}

export default App;
