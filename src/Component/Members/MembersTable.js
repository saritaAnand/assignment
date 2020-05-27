import React from 'react';
import {getMembers} from '../../Services/member-services';
import './Members.css';
import Activity from '../MembersActive/MembersActive';
import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';

export default class Members extends React.Component{
    constructor(){
        super();
        this.state={
           members:[],
           opnPopup:false,
            name:"",
            period:[],
            id:""
                  
        }
        this.togglePopup = this.togglePopup.bind(this);
    }
    componentDidMount(){
      this.fetchMembers();
    }

    fetchMembers(){
        getMembers()
        .then(response => response.json())
        .then(data =>{
            if(data){
               this.setState({
                   members: data[0].members
               })
            }
            // else{

            // }
        })
        .catch(error =>{
            console.log("ERROR");
            alert('ERROR!!! Pls start json server at http://localhost:3004/posts');
        })
    }

    viewAction(name,period,id){
        this.togglePopup();
       this.setState({
               name:name,
               period:period,
               id:id
              
       });
    }

    togglePopup(){
        const toggle = this.state.opnPopup;
        this.setState({
            opnPopup:!toggle
        });
    }

    render(){
        return(
            <main className="wrapper">
                <section>
                    <table className="member">
                        <thead>
                            <tr>
                                <th>Members ID</th>
                                <th>Members Name</th>
                                <th>Members Location</th>
                                <th>Members Active Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {this.state.members && this.state.members.length>0 &&
                                    this.state.members.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.real_name}</td>
                                                <td>{item.tz}</td>
                                                <td>
                                                    <button className="btn" onClick={()=>this.viewAction(item.real_name,item.activity_periods,item.id)}>View</button>
                                                     {  this.state.opnPopup &&
                                                     <React.Fragment>
                                                         <Backdrop/>
                                                        <Modal title={this.state.name} togglePopup={this.togglePopup}>
                                                            <Activity
                                                               period={this.state.period}
                                                               id={this.state.id}
                                                               name={this.state.name}
                                                               togglePopup={this.togglePopup}
                                                            />
                                                        </Modal> 
                                                     </React.Fragment>
                                                        
                                                    }   
                                                </td>
                                            </tr>
                                        );
                                    })      
                                }                    
                        </tbody>
                    </table>
                </section>
                      
            </main>
        );
    }
}