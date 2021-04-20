import styles from '../Feedback.module.css';

const Statistics = ({good, neutral, bad, total, percentege}) => (
    <div>
        <p className={styles.title} >Statistics</p>
    <span className={styles.counter} >Good: {good} </span>
    <span className={styles.counter} >Neutral: {neutral} </span>
    <span className={styles.counter} >Bad: {bad}</span>
    <span className={styles.counter} >Total: {total}</span>
    {percentege ? 
    <span className={styles.counter} >Percentage: {percentege}%</span>
    :<span className={styles.counter} >Percentage: </span>}
    </div>
)
export default Statistics;

