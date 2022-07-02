import styles from './CharacterCard.module.css';

interface CharacterCardProps {
    character: {
        name: string,
        status: string,
        species: string,
        image: string
    }
}

export function CharacterCard(props: CharacterCardProps) {
    return (
        <li className={styles.characterCard}>
            <img src={props.character.image} alt={props.character.name} />
            <div className="character-data">
                <h3>Name: {props.character.name}</h3>
                <p>Status: {props.character.status}</p>
                <p>Species: {props.character.species}</p>
            </div>
        </li>
    )
}