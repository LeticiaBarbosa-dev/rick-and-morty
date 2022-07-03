import { useEffect, useState } from "react";
import { CharacterCard } from "./components/CharacterCard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./global.css";

interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);
  return (
    <>
      <Header />
      <div className="characterList">
        {characters.map((character) => {
          return (
            <div className="characterCard">
              <CharacterCard key={character.id} character={character} />
            </div>
          )
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
