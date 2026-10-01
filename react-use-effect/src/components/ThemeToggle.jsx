/* Esercizio 2 – Theme switcher (light/dark)

Creare un componente ThemeToggle con un pulsante che alterna tema chiaro e scuro.

    Lo stato theme viene salvato in localStorage e recuperato al caricamento.
    Un useEffect applica una classe al document per light e dark mode
    Il testo del pulsante cambia in base al tema attivo.


Bonus: gestire la visibilità del componente con conditional rendering e aggiungere una cleanup function di useEffect() che ripristina il tema light quando il componente viene smontato. Verificare il comportamento.*/

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);

    return () => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add("light");
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <section className="container d-flex flex-column justify-content-center align-items-center">
      <h1>Cambia tema</h1>
      <p>
        Clicca sul bottone per switchare dal tema chiaro al tema scuro, e
        viceversa
      </p>
      <button className="btn btn-primary mt-4" onClick={toggleTheme}>
        {theme === "light" ? "Tema scuro" : "Tema chiaro"}
      </button>
    </section>
  );
}
