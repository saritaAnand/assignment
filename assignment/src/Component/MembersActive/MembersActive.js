import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './MemberActive.css';

export default class MembersActive extends React.Component{

    constructor(props){
        super(props);
        this.state={
            dateArray:[],
            display:false,
            stTime:"",
            endTime:"",
            date:""
        }
        this.clearState = this.clearState.bind(this);
    }

    clearState(){
        this.setState({
            stTime:"",
            endTime:""
        })
    }

    handleChange(event){
        this.clearState();
        if(event){
            const selectedDate = event.toDateString();
            let activeDate;
            let startTime;
            let eTime;
             this.props.period.forEach(e =>
                 {    
                    startTime =  e.start_time.split("  ");
                    eTime = e.end_time.split(" ").pop();                 
                     activeDate = new Date(startTime[0]).toDateString(); // to convert date to a to a more readable format       
                     if(activeDate === selectedDate){
                         this.setState({
                              display: true,
                              stTime:startTime[1],
                              endTime:eTime,
                              date:event
                         })
                     }
                     else{
                         this.setState({
                             date:event,
                         })
                     }  
                 }
             )
        }
    }

    render(){
        return(
            <section>
                <article>
                    <h3>Member ID: {this.props.id}</h3>
                    <p>{this.props.index}</p> 
                    {
                        this.state.display && 
                        <div>
                            <p><b>Active Duration:</b></p>                                              
                            <p>This member was active from:</p>
                            <p>{this.state.stTime} to {this.state.endTime}</p>           
                        </div>
                    }
                    {
                        !this.state.display && 
                        <p>Please select date to view member's active duration</p>
                    }
                </article>
               <article>
                <DatePicker
                 
                        selected={this.state.date ? new Date(this.state.date): ""}
                        maxDate={new Date()}
                        showMonthDropdown
                        showYearDropdown
                        className="datePicker"
                        placeholderText="Click to select a date"
                        onChange={this.handleChange.bind(this)} //To clear Time
                    />
               </article>
               <article className="action">
                    <button className="btn" onClick={this.props.togglePopup}>CLOSE</button>
               </article>             
            </section>
        );
    }
}