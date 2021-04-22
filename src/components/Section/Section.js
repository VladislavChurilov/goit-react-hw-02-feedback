import styles from '../Feedback.module.css';
import PropTypes from 'prop-types';

const Section = ({children ,title}) =>(    
        <div className={styles.feedback} >
        <p className={styles.title} >{title}</p>
        {children}        
        </div> 
)
Section.propTypes = {
        title: PropTypes.string.isRequired
    };
    
export default Section;