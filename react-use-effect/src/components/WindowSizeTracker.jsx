/* Esercizio 3 – Window size tracker

Creare un componente WindowSize che mostra in tempo reale larghezza e altezza della finestra.

    Stato inizializzato con window.innerWidth e window.innerHeight.
    useEffect che registra un listener sull'evento resize.
    Mostrare anche un badge con il breakpoint corrente: mobile (< 768px), tablet (< 992px), desktop.
    Cleanup con removeEventListener: la funzione handler deve quindi essere dichiarata con un nome, non anonima. */

import { useState, useEffect } from "react";

export default function WindowSizeTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = windowSize;

  let breakpoint = "desktop";

  if (width < 768) {
    breakpoint = "mobile";
  } else if (width < 992) {
    breakpoint = "tablet";
  }

  return (
    <section className="container d-flex flex-column justify-content-center align-items-center">
      <p className="h5 mt-2">Larghezza: {width}px</p>
      <p className="h5 mt-3">Altezza: {height}px</p>
      <span className="h5 mt-3">{breakpoint}</span>
    </section>
  );
}
