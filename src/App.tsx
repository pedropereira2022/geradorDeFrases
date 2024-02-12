import { useState } from "react";
import logoImg from "./assets/logo.png";
import "./App.css";

function App() {
  const [textoFrase, setTextoFrase] = useState("Siga os bons");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Frases do chaves",
      frases: [
        "Foi sem querer querendo.",
        "Isso, isso, isso!",
        "Ninguém tem paciência comigo.",
        "Que que foi, que que foi, que que há!",
        "Pois é, pois é, pois é.",
        "A vingança nunca é plena, mata a alma e envenena.",
      ],
    },
    {
      id: 2,
      nome: "Frases do Chapolin",
      frases: [
        "Sigam-me os bons!",
        "Não contavam com minha astúcia!",
        "Se aproveitam da minha nobreza...",
        "Palma, palma, não priemos cânico!",
        "Não há mal que sempre dure, nem bem que nunca se acabe.",
        "Quem poderá me defender?",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function generateSentence() {
    const numeroAleatorio = Math.floor(
      Math.random() * allFrases[categoriaSelecionada].frases.length
    );
    setTextoFrase(
      `"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`
    );
  }

  return (
    <div className="container">
      <img src={logoImg} alt="logo-frases" className="logo" />
      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            className="category-button"
            key={item.id}
            style={{
              borderWidth:
                item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>
      <button className="button-frase" onClick={generateSentence}>
        Gerar frase
      </button>
      {textoFrase !== "" && <p className="texto-frase">{textoFrase}</p>}
    </div>
  );
}

export default App;
