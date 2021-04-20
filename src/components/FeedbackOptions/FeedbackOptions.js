import styles from '../Feedback.module.css';

const FeedbackOptions = ({onGoodIncr, onNeutrIncr, onBedIncr}) => (
    <div>
        <button className={styles.feedbackOptions} type="button" onClick={onGoodIncr} >Good</button>
        <button className={styles.feedbackOptions} type="button" onClick={onNeutrIncr} >Neutral</button>
        <button className={styles.feedbackOptions} type="button" onClick={onBedIncr}>Bad</button>        
    </div>
)
export default FeedbackOptions;