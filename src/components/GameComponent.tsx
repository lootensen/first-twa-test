import React, { useEffect } from 'react';

const GameComponent = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'wasm_exec.js'; // Pfad zum Ebiten JS-Skript
      script.async = true;
  
      script.onload = () => {
        console.log(window)
        const go = new window.Go(); // Initialisierung des Go Objekts, das im Skript definiert ist
        WebAssembly.instantiateStreaming(fetch("mygame.wasm"), go.importObject).then((result) => {
          go.run(result.instance);
        }).catch((e) => {
          console.error('Error loading Wasm', e);
        });
      };
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return <div id="gameContainer"></div>; // Container, in dem das Spiel angezeigt wird
  };
  
  export default GameComponent;