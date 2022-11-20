import styles from './profile.module.css';

export default function Profile(props){
    return(
        <div className={styles.container}>
            <img src="me.jpg" className={styles.profilePicture}/>
        </div>
    )
}