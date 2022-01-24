import styles from './footer.module.css';

export default function Footer(props) {
    return (
        <div className={styles.container}>
            <a
                href="https://github.com/CallumHYoung"
                target="_blank"
                rel="noopener noreferrer"
            >

                <img src="github.svg" alt="GitHub" className={styles.logo} />
            </a>
            <a
                href="https://www.linkedin.com/in/callumhyoung/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="linkedin.svg" alt="LinkedIn" className={styles.logo} />
            </a>
            <a
                href="mailto:contact@callumyoung.com?subject = Hello from Callumyoung.com&body = Message"
                target="_blank"
                rel="noopener noreferrer">
                <img src="email.svg" alt="Email" className={styles.logo} />
            </a>
        </div>
    )
}