import styles from '../Feedback.module.css';

const Notification =({message}) =>(
    <p className={styles.title} >{message}</p>
)

export default Notification;