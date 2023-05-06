import React from "react";

import { useState } from "react";

import { Statistics } from "../Statistics/Statistics";

import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";

import { Section } from "../Section/Section";

import { Notification } from "../Notification/Notification";

import styles from "./Feedback.module.css"



export const Feedback = () => { 
    //---------------------refactoring state-------------------------------//    
    // state = {
    //     good: 0,
    //     neutral: 0,
    //     bad: 0,        
    // }
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0)
    //---------------------refactoring state-------------------------------//


    //---------------------refactoring options-----------------------------//
    // options = Object.keys(this.state);
    const options = ['good', 'neutral', 'bad']
    //---------------------refactoring options-----------------------------//    
    
   const name = {
        good: 'Супер',
        neutral:"Норм",
        bad: "Відстій",
    }
    
    //---------------------refactoring answer-----------------------------//  
    // answer = (button) => {
    //     this.setState(prevState => {
    //         return {
    //             [button]: prevState[button] + 1,
    //         }
    //     })
    // }
    const answer = (button) => {
        switch (button) {
            case "good":
                setGood(prevState => prevState + 1);
                break;
            case "neutral":
                setNeutral(prevState => prevState + 1);
                break;
            case "bad":
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
    };
    //---------------------refactoring answer-----------------------------//  

    //---------------------refactoring countTotalFeedback-----------------//
    // countTotalFeedback = () => {
    //     const { good, neutral, bad } = this.state;
    //     return ( good + neutral + bad)
    // }
    const countTotalFeedback = () => {       
        return ( good + neutral + bad)
    }
    //---------------------refactoring countTotalFeedback-----------------//

    //---------------------refactoring countPositiveFeedbackPercentage----//
    // countPositiveFeedbackPercentage() {
    //     const { good } = this.state;
    //     return Math.round((good / this.countTotalFeedback()) * 100);
    // }
    const countPositiveFeedbackPercentage = () => {        
        return Math.round((good / countTotalFeedback()) * 100);
    }
    //---------------------refactoring countPositiveFeedbackPercentage----//

    //---------------------refactoring countNormalFeedbackPercentage------//
    // countNormalFeedbackPercentage() {
    //     const { neutral} = this.state;
    //     return Math.round((neutral / this.countTotalFeedback()) * 100);
    // }
    const countNormalFeedbackPercentage = () => {
        return Math.round((neutral / countTotalFeedback()) * 100);
    };
    //---------------------refactoring countNormalFeedbackPercentage------//
    
    return (
        <div className={styles.Feedback}>
            <Section
                title={"Реакція на наші послуги"}
                trailer={"*будь-ласка, залиште відгук, натиснувши на вибрану кнопку"}
            >
            {/* <h1>Реакція на наші послуги</h1>
            <p>*будь-ласка, залиште відгук, натиснувши на вибрану кнопку</p> */}
            <FeedbackOptions
                // onGood={this.answerGood}
                // onNeutral={this.answerNeutral}
                // onBad={this.answerBad}   
                    options={options}
                    answer={answer}
                    name = {name}
                    
                />
            </Section>
            {/* <ul>
                <button type="button" onClick={this.answerGood}>Супер</button>
                <button type="button" onClick={this.answerNeutral}>Норм</button>
                <button type="button" onClick={this.answerBad}>Відстій</button>
            </ul> */}
            {/* <b>{this.countTotalFeedback()} людей нам кажуть {this.state.good} разів супер, {this.state.neutral} разів норм, {this.state.bad} разів відстій. {this.countPositiveFeedbackPercentage() > 0 && (<span> Тож високу оцінку нам дали {this.countPositiveFeedbackPercentage()} % опитаних</span> )}. {this.countNormalFeedbackPercentage() > 0 && (<span> Залишились задоволеними {this.countNormalFeedbackPercentage()} % опитаних</span> )}  </b> */}
            <Section
                title={"Результат опитування"}
            
            >
            {/* <b>{this.countTotalFeedback()} людей нам кажуть {this.state.good} разів супер, {this.state.neutral} разів норм, {this.state.bad} разів відстій. {this.countPositiveFeedbackPercentage() > 0 && (<span> Тож високу оцінку нам дали {this.countPositiveFeedbackPercentage()} % опитаних</span> )}. {this.countNormalFeedbackPercentage() > 0 && (<span> Залишились задоволеними {this.countNormalFeedbackPercentage()} % опитаних</span> )}  </b> */}
                
                {countTotalFeedback() > 0 ? <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                    neutralPercentage={countNormalFeedbackPercentage()}
                />: <Notification massage={"Твій відгук стане першим"}/> }
            </Section>
            {/* <ul>
                <p>{this.state.good} разів супер</p>
                <p>{this.state.neutral} разів норм</p>
                <p>{this.state.bad} разів відстій</p>
                
                {this.countTotalFeedback() > 0 && (
                <p>{this.countTotalFeedback()} разів дали відгук</p>
                )}
                {this.countTotalFeedback() > 0 && (
                <p>позитивний {this.countPositiveFeedbackPercentage()} %</p>
                )}
            </ul> */}
        </div>
    );
    }; 
    
    


