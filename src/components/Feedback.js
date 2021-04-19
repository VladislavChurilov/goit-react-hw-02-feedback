import PropTypes from 'prop-types';
import React from 'react';
import styles from './Feedback.module.css';


class Feedback extends React.Component {
render() {
    return (
        <div className={styles.feedback} >
        <p className={styles.title} >Please leave feedback</p>
        <button className={styles.feedbackButton} >Good</button>
        <button className={styles.feedbackButton} >Neutral</button>
        <button className={styles.feedbackButton} >Bad</button>        
        
        <p className={styles.title} >Statistics</p>
        <span className={styles.counter} >Good: </span>
        <span className={styles.counter} >Neutral: </span>
        <span className={styles.counter} >Bad: </span>
        
        </div>
    )
}
}





export default Feedback;