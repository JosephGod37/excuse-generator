import { useState, useEffect } from "react";
import Form from "./Form";
import ExcuseList from "./ExcuseList";

export interface Excuse {
    id: string;
    name: string;
    reason: string;
    credibility: number;
    date: string;
    creativity: string;
    details: string;
    urgent: boolean;
}

function App() {
    const [excuses, setExcuses] = useState<Excuse[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("excuses");
        if (saved) {
            setExcuses(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("excuses", JSON.stringify(excuses));
    }, [excuses]);

    function addExcuse(excuse: Excuse) {
        setExcuses(prev => [...prev, excuse]);
    }

    function removeExcuse(id: string) {
        setExcuses(prev => prev.filter(e => e.id !== id));
    }

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>Generator Wymówek</h1>
            <Form addExcuse={addExcuse} />
            <ExcuseList excuses={excuses} removeExcuse={removeExcuse} />
        </div>
    );
}

export default App;