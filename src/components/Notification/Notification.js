import styles from '../Feedback.module.css';
import PropTypes from 'prop-types';

const Notification =({message}) =>(
    <p className={styles.title} >{message}</p>
)

Notification.propTypes = {
    message:PropTypes.string.isRequired    
}

export default Notification;