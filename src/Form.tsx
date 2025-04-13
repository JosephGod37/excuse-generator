import { useState } from "react";
import { Excuse } from "./App";
import './Form.css';
interface FormProps {
    addExcuse: (e: Excuse) => void;
}

const Form = ({ addExcuse }: FormProps) => {
    const [name, setName] = useState("");
    const [reason, setReason] = useState("spóźnienie");
    const [credibility, setCredibility] = useState(5);
    const [date, setDate] = useState("");
    const [creativity, setCreativity] = useState("średnia");
    const [details, setDetails] = useState("");
    const [urgent, setUrgent] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newExcuse: Excuse = {
            id: crypto.randomUUID(),
            name,
            reason,
            credibility,
            date,
            creativity,
            details,
            urgent,
        };

        addExcuse(newExcuse);


        setName("");
        setReason("spóźnienie");
        setCredibility(5);
        setDate("");
        setCreativity("średnia");
        setDetails("");
        setUrgent(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Imię:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} /><br />

            <label>Powód wymówki:</label>
            <select value={reason} onChange={e => setReason(e.target.value)}>
                <option>spóźnienie</option>
                <option>niedostarczenie pracy domowej</option>
                <option>brak odpowiedzi na wiadomość</option><option value="brak odpowiedzi na wiadomość">Brak odpowiedzi na wiadomość</option>
                <option value="zły dzień">Zły dzień</option>
                <option value="problemy techniczne">Problemy techniczne</option>
                <option value="porwanie przez kosmitów">Porwanie przez kosmitów</option>
                <option value="awaria internetu">Awaria internetu</option>
                <option value="pomoc sąsiadowi">Pomoc sąsiadowi</option>
                <option value="pies zjadł pracę">Pies zjadł pracę</option>
                <option value="korki w mieście">Korki w mieście</option>
                <option value="alarm przeciwpożarowy">Alarm przeciwpożarowy</option>
                <option value="problemy zdrowotne">Problemy zdrowotne</option>
                <option value="musiałem ratować świat">Musiałem ratować świat</option>
                <option value="zapomniałem hasła do komputera">Zapomniałem hasła do komputera</option>
                <option value="zbyt duża presja">Zbyt duża presja</option>
                <option value="niezidentyfikowane zjawiska">Niezidentyfikowane zjawiska</option>
                <option value="nagła podróż w czasie">Nagła podróż w czasie</option>
            </select><br />

            <label>Poziom wiarygodności: {credibility}</label>
            <input type="range" min="0" max="10" value={credibility} onChange={e => setCredibility(Number(e.target.value))} /><br />

            <label>Data zdarzenia:</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} /><br />

            <label>Poziom kreatywności:</label>
            <select value={creativity} onChange={e => setCreativity(e.target.value)}>
                <option>niska</option>
                <option>średnia</option>
                <option>duża</option>
                <option>bardzo duża</option>
                <option>kosmiczna</option>
            </select><br />

            <label>Dodatkowe szczegóły:</label>
            <textarea value={details} onChange={e => setDetails(e.target.value)} /><br />

            <label>
                <input type="checkbox" checked={urgent} onChange={e => setUrgent(e.target.checked)} />
                Pilna wymówka
            </label><br />

            <button type="submit">Wyślij</button>
        </form>
    );
};

export default Form;