export default function UserInput({ onChangeInput, userInput }) {
  return (
    <div id='user-input'>
      <div className='input-group'>
        <p>
          <label>Ininital investment</label>
          <input
            type='number'
            required
            value={userInput.initialInvestment}
            onChange={(evt) =>
              onChangeInput("initialInvestment", evt.target.value)
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type='number'
            required
            value={userInput.annualInvestment}
            onChange={(evt) =>
              onChangeInput("annualInvestment", evt.target.value)
            }
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected return (in %)</label>
          <input
            type='number'
            required
            value={userInput.expectedReturn}
            onChange={(evt) =>
              onChangeInput("expectedReturn", evt.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            required
            value={userInput.duration}
            onChange={(evt) => onChangeInput("duration", evt.target.value)}
          />
        </p>
      </div>
    </div>
  );
}
