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
                <span><strong>Name:</strong> {character.name}</span>
                <span><strong>Status:</strong> {character.status}</span>
                <span><strong>Species:</strong> {character.species}</span>
            </div>
        </li>
    )
}