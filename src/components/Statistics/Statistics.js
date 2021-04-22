import styles from '../Feedback.module.css';
import PropTypes from 'prop-types';

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
Statistics.propTypes = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    percentege:PropTypes.number.isRequired
}
export default Statistics;

