import React, { Component } from 'react'

import { BsDatabaseFillAdd,BsFillCaretLeftFill } from 'react-icons/bs';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { BsCart4} from "react-icons/bs";
import Form from 'react-bootstrap/Form';


export default class Home extends Component {
  constructor(props){
    super(props);
 
    this.state={
      posts:[]
    };
  }
  componentDidMount(){
    this.viewPosts();
  }
   
 //retrivew funtion
  viewPosts(){
    axios.get("http://localhost:8070/Emp").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        //show array list 
        console.log(this.state.posts)        
      }
    });
  }
  //delete function
  onDelete=(id)=>{
    axios.delete(`http://localhost:8070/Emp/delete/${id}`).then((res)=>{
      alert("Deleted");
      this.viewPosts();
    })
  }
  
 
   

  render() {

         
    
    


    return (
        <div className='container'><br/>
        
        <div className='row'>
        {this.state.posts.map((posts)=>(
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>    
          <div className='card p-0 overflow-hidden h-100 shadow' alt='im'>
          <img src={posts.CusImg} className='card-img-top img-fluid' alt='brand'/>   
               <div className='card-body text-center'>  
                    <h5 className='card-title'>{posts.first_name}&nbsp;{posts.last_name}</h5>
                    <p className='text'>{posts.email}</p>
                    <p className='text'>{posts.Phone}</p>
                    <p className='text'>{posts.Address}</p>
                    <p className='text'>{posts.date}</p>
             
                    <a className="btn btn-warning" href={`/editEmp/${posts._id}`}>
                         <i className="fas fa-edit"></i>&nbsp;Edit
                       </a>
                       &nbsp; &nbsp; 
                       <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                         <i className="fas fa-tash-altt"></i>&nbsp;Delete
                       </a>
                </div>
                
            </div>
            
         </div>
               
       ))}<div className='btnback'>
       <a className="btn btn-warning" href={`/admin`}>
       <BsFillCaretLeftFill/>Back
                       </a></div>
       </div>
                      
           </div> 
            
         
    
  )
}
}
