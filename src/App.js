import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';


class App extends Component{    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    handleIncrement = option => {
        this.setState(prevState => ({
            [option]: prevState[option] + 1,
        }));    
    }      
    
    render(){
        const {good} = this.state;
        const {neutral} = this.state;
        const {bad} = this.state;
        const countTotalFeedback = good+neutral+bad;        
        const countPositiveFeedbackPercentage = Math.round(good/countTotalFeedback*100);
        const options = Object.keys(this.state);
        return(        
        <Section title="Please leave feedback">
        <FeedbackOptions options={options} onIncr={this.handleIncrement}         
        />
        {countTotalFeedback?
        <Statistics
         good={good} 
         neutral={neutral} 
         bad={bad} 
        //  name="good"
         total={countTotalFeedback} 
         percentege ={countPositiveFeedbackPercentage} >             
         </Statistics>
         :<Notification message="No feedback given"/>
        }
        </Section>    
    )}
}


export default App;