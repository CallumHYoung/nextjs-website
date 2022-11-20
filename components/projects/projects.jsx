import styles from './projects.module.css';

export default function Projects(props) {
    return(
        <>
            <div>
                <p className={styles.header}>Projects</p>
            </div>
            <div className={styles.projectContainer}>
                {props.children && props.children.forEach(element => {
                    
                })}
            </div>
        </>
    )
}