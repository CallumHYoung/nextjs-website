import styles from './infoSelectionPanel.module.css';

const navigation = {
    PROJECTS: "projects",
    EXPERIENCE: "experience"
}

const scrollTo = (nav) => {
    location.hash = `#${nav}`;
}

const scrollToProjects = () => scrollTo(navigation.PROJECTS);
const scrollToExperience = () => scrollTo(navigation.EXPERIENCE); 

export default function InfoSelectionPanel(props) {
    return(
        <div className={styles.container}>
            {/* <button
                onClick={scrollToProjects}
                className={styles.button}
            >
            Projects
            </button> */}
            {/* <button
                onClick={scrollToExperience}
                className={styles.button}
            >
            Experience
            </button> */}
        </div>
    )
}