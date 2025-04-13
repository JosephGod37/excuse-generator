import { Excuse } from "./App";

interface Props {
    excuses: Excuse[];
    removeExcuse: (id: string) => void;
}

const ExcuseList = ({ excuses, removeExcuse }: Props) => {
    return (
        <div>
            <h2>Lista wymówek:</h2>
            {excuses.map(e => (
                <div key={e.id} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
                    <p><strong>{e.name}</strong>: {e.reason}</p>
                    <p>Wiarygodność: {e.credibility}</p>
                    <p>Data: {e.date}</p>
                    <p>Kreatywność: {e.creativity}</p>
                    <p>Dodatki: {e.details}</p>
                    <p>{e.urgent ? " Pilna" : "Niepilna"}</p>
                    <p>
                        <em>
                            Panie Profesorze, niestety {e.reason}, ponieważ {e.details || "brak szczegółów"}, a poziom wiarygodności tej wymówki to: {e.credibility}, zdarzenie miało miejsce ({e.date}), kreatywność {e.creativity}, wymówkę oznaczono jako {e.urgent ? "pilną" : "niepilną"}.
                        </em>
                    </p>
                    <button onClick={() => removeExcuse(e.id)}>Usuń</button>
                </div>
            ))}
        </div>
    );
};

export default ExcuseList;