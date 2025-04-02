import {useState} from "react";

interface FormProps{
    wymowka: (m:string)=>void;
}



const Form =(props: FormProps) => {
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
        <form onSubmit={handleSubmit}>
            <label>Imie:</label>
            <input type="text" name="name" value={textValue} onChange={handleTextInputChange}/>

            <label>Powod wymowki</label>
            <input type="text" name="wymowka" value={textValue} onChange={handleTextInputChange}/>



            <button type="submit">Submit</button>
        </form>
    )

}
export default Form