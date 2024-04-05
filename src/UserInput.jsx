export default function UserInput({ onChangeInput, userInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Ininital investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestement}
            onChange={(evt) =>
              onChangeInput("initialInvestement", evt.target.value)
            }
          />
        </p>
        <p>
          <label>Annual investement</label>
          <input
            type="number"
            required
            value={userInput.annualInvestement}
            onChange={(evt) =>
              onChangeInput("annualInvestement", evt.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
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
            type="number"
            required
            value={userInput.duration}
            onChange={(evt) => onChangeInput("duration", evt.target.value)}
          />
        </p>
      </div>
    </div>
  );
}
