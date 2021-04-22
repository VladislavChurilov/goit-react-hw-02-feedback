import styles from '../Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onIncr}) => (
   <div>
    {options.map((option) =>(           
        <button 
        key={option} 
        className={styles.feedbackOptions} 
        type="button" 
        onClick={()=>onIncr(option)}>
        {option}
        </button>           
        ))}
    </div>     
)
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onIncr: PropTypes.func.isRequired,
  };

export default FeedbackOptions;