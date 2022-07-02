import styles from './CharacterCard.module.css';

interface CharacterCardProps {
    character: {
        name: string,
        status: string,
        species: string,
        image: string
    }
}

export function CharacterCard({ character}: CharacterCardProps) {
    return (
        <li className={styles.characterCard}>
            <img className={styles.characterImg} src={character.image} alt={character.name} />
            <div className={styles.characterInfo}>
                <h3>Name: {character.name}</h3>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
            </div>
        </li>
    )
}