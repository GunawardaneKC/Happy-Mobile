import React, { Component } from 'react'
import axios from 'axios';
 


export default class CustomerAdmin extends Component {

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
   axios.get("http://localhost:8070/getData").then(res =>{
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
    axios.delete(`http://localhost:8070/user/delete/${id}`).then((res)=>{
      alert("Deleted");
      this.viewPosts();
    })
  }

  filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.first_name.toLowerCase().includes(searchKey) ||
      post.last_name.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.date.toLowerCase().includes(searchKey)
    );
    this.setState({
      posts: result,
    })
  };

  handleSearch = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    axios.get('http://localhost:8070/getData').then(res => {
      if (res.data.success) {
        this.filterPosts(res.data.existingPosts, searchKey);
      }
    });
  };

  render() {
    return (
      <div>
        <div className="col-lg-9 mt-2 mb-2">
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input className='form-control' type="search" placeholder='Search' value={this.searchQuery} onChange={this.handleSearch} />
        </div>
       <table className="table" >
           <thead>
             <tr>
             <th scope="col">Index</th>
             <th scope="col">First Name</th>
             <th scope="col">Last Name</th>
             <th scope="col">Email</th>
             <th scope="col">Date</th>
             <th scope="col">Action</th>
             </tr>
           </thead>
         
         <tbody>
            {this.state.posts.map((posts,index)=>(
                 <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{posts.first_name}</td>
                    <td>{posts.last_name}</td>
                    <td>{posts.email}</td>
                    <td>{posts.date}</td>
                    <td>
                                             
                       <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                         <i className="fas fa-tash-altt"></i>&nbsp;Delete
                       </a>
                   </td>
                 </tr>

            ))}
         </tbody>
       </table>
       <a className="btn btn-warning" href={`/admin`}>
                         <i className="fas fa-tash-altt"></i>Back
                       </a>

      </div>
    )
  }
}


