import { useState } from "react"
export default function UserInput(){
    const [userInput, setUserInput] = useState({
        initialInvestement: 10000,
        annualInvestement: 1200,
        expectedReturn: 6,
        duration: 10
    })
    function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }
    return(
        <div id="user-input">
            <div className='input-group'>
                <p>
                    <label>Ininital investment</label>
                    <input type="number" required />
                </p>
                <p>
                    <label>Annual investement</label>
                    <input type="number" required />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected return</label>
                    <input type="number" required />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required />
                </p>
            </div>
        </div>
    )
}