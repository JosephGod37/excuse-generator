import './App.css'
import Form from "./Form.tsx";

function App() {
    let listWymo = [];


    function dajWymowke(w: string):void{
       listWymo.push(w)
    }


  return (
    <>
      <Form wymowka={dajWymowke}/>

    </>
  )
}

export default App
