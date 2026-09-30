import { useState, useEffect } from "react";
/*Esercizio 1 – Blocco note persistente

Creare un componente NotePad con una <textarea>.

    Il testo digitato viene salvato in localStorage a ogni modifica.
    Al ricaricamento della pagina il testo viene recuperato da localStorage.
    Sotto la textarea viene mostrato il numero di caratteri.
    Il titolo della tab del browser mostra X caratteri.


Bonus: un pulsante "Svuota" che cancella testo e chiave dal localStorage.*/
export default function BlockNoteApp() {
  const [text, setText] = useState(() => {
    const savedText = localStorage.getItem("text-save");
    if (savedText) {
      return JSON.parse(savedText);
    }

    return "";
  });
  useEffect(() => {
    localStorage.setItem("text-save", JSON.stringify(text));
    document.title = `Ci sono ${text.length} caratteri`;
  }, [text]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="container d-flex flex-column align-items-center justify-content-center">
      <h1>NotePad</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="w-500 h-450 mt-1"
          name="messaggio"
          placeholder="Scrivere qui..."
          value={text}
        ></textarea>
        <p className="mt-1">Numero di caratteri: {text.length}</p>
      </form>
    </section>
  );
}
