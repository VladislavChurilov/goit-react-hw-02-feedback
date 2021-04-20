import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component{    
    state={
        good:0,
        neutral:0,
        bad:0
    }
    handleGoodIncrement=()=>{
        this.setState(prevState=>({            
            good:prevState.good + 1,            
        }));
    }
    handleNeutralIncrement=()=>{
        this.setState(prevState=>({            
            neutral:prevState.neutral + 1,            
    }));
    }
    handleBedIncrement=()=>{
        this.setState(prevState=>({
            bad: prevState.bad+1,
        }));
    }    
    
    render(){
        const {good} = this.state;
        const {neutral} = this.state;
        const {bad} = this.state;
        const countTotalFeedback = good+neutral+bad;        
        const countPositiveFeedbackPercentage = Math.round(good/countTotalFeedback*100);
        return(        
        <Section title="Please leave feedback">
        <FeedbackOptions onGoodIncr={this.handleGoodIncrement} 
        onNeutrIncr={this.handleNeutralIncrement} 
        onBedIncr={this.handleBedIncrement} />
        {countTotalFeedback?
        <Statistics
         good={good} 
         neutral={neutral} 
         bad={bad} 
         total={countTotalFeedback} 
         percentege ={countPositiveFeedbackPercentage} >             
         </Statistics>
         :<Notification message="No feedback given"/>
        }
        </Section>    
    )}
}


export default App;