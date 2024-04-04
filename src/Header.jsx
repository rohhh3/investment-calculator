import logo from './assets/investment-calculator-logo.png'
export default function Header(){
    return(
        <div id='header'>
            <img src={logo} alt="sack with bunch of coins in it" />
            <h1>Investment Calculator</h1>
        </div>
    )
}