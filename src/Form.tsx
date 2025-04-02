import {useState} from "react";


const Form =() => {
    const [textValue, setTextValue]= useState<string>("")


    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        console.log(textValue)
    }

    function handleTextInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        setTextValue(event.target.value)
    }
    return(
        <form>
            <label>Imie:</label>
            <input type="text" name="name" value={textValue} />

            <label>Powod wymowki</label>




            <button type="submit">Submit</button>
        </form>
    )

}