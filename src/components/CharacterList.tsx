import { useEffect, useState } from "react"
import { CharacterCard } from "./CharacterCard";

interface Character {
    name: string,
    status: string,
    species: string,
    image: string
}

export function CharacterList() {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, []);

    return (
        <section className="character-list">
            <ul>
                {characters.map(character => {
                    return <CharacterCard key={character.name} character={character} />
                })}
            </ul>
        </section>
    )
}