import styles from '../Feedback.module.css';

const Section = ({children ,title}) =>(    
        <div className={styles.feedback} >
        <p className={styles.title} >{title}</p>
        {children}        
        </div> 
)
export default Section;