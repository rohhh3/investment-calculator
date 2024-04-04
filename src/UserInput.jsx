import Input from './Input'
export default function UserInput(){
    return(
        <div id="user-input">
            <Input label="initizal investment" />
            <Input label="annual investment" />
            <Input label="expected return" />
            <Input label="duration" type="number" />
        </div>
    )
}