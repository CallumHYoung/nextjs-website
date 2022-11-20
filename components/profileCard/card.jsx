import styles from './card.module.css';

import Profile from '../profile/profile';
import InfoSelectionPanel from '../infoSelectionPanel/infoSelectionPanel';

const heading = "Hello!"
const description = "I'm currently a Software Engineer working on cloud, focused on speeding up production pipelines."
const contact = "Feel free to contact me at contact [at] callumyoung [dot] com"
export default function Card(props) {

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.heading}>
                    <p className={[styles.bigText, styles.yellowText].join(" ")}>{heading}</p>
                    <p className={[styles.smallText, styles.yellowText].join(" ")}>{description}</p>
                    <p className={[styles.smallText, styles.yellowText].join(" ")}>{contact}</p>
                </div>
                <Profile/>
            </div>
            <InfoSelectionPanel/>
        </div>
    )
}