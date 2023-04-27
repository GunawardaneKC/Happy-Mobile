import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [completedPosts, setCompletedPosts] = useState([]);

  useEffect(() => {
    retrievePosts();
  }, []);

  const retrievePosts = () => {
    axios.get('/getsuppliers').then(res => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
      }
    });
  };

  const deletePost = (id) => {
    axios.delete(`/supplier/delete/${id}`).then(res => {
      alert('Deleted Successfully');
      retrievePosts();
    });
  };

  // const markAsComplete = (id) => {
  //   axios.put(`/supplier/markAsComplete/${id}`).then(res => {
  //     alert('Marked as Complete');
  //     retrievePosts();
  //   });
  // };

  const filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.SupplierID.toLowerCase().includes(searchKey) ||
      post.Name.toLowerCase().includes(searchKey) ||
      post.contactNumber.toLowerCase().includes(searchKey) ||
      post.ItemList.toLowerCase().includes(searchKey) 
      // post.Brand.toLowerCase().includes(searchKey) ||
      // post.Model.toLowerCase().includes(searchKey)
    );
    setPosts(result);
  };

  const handleSearch = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    axios.get('/getsuppliers').then(res => {
      if (res.data.success) {
        filterPosts(res.data.existingPosts, searchKey);
      }
    });
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input className='form-control' type="search" placeholder='Search' name='searchQuery' onChange={handleSearch} />
        </div>
      </div>
      <div>
        <button className="btn btn-success"><Link to='/addsupplier' style={{textDecoration: 'none', color:'white'}}>Add New supplier</Link></button>&nbsp;
        {/* <button className="btn btn-primary">
          <Link to='/completedsupplier' style={{textDecoration: 'none', color:'white'}}>View Completed suppliers</Link>
        </button> */}
      </div>
      <h3 style={{ marginTop: '40px', marginBottom: '-30px'}}>All suppliers</h3>
      <table className='table table-hover' style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>supplier ID</th>
            <th scope='col'>supplier Name</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Items</th>
            <th scope='col'>Action</th>
            {/* <th scope='col'>Brand</th>
            <th scope='col'>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id}>
              <th scope='row'>{index + 1}</th>
              <td>
                <Link to={`/postsupplier/${post._id}`} style={{ textDecoration: 'none' }}>
                  {post.SupplierID}
                </Link>
              </td>
              <td>{post.Name}</td>
              <td>{post.contactNumber}</td>
              <td>{post.ItemList}</td>
              {/* <td>{post.Brand}</td> */}
              <td>
                <Link to={`/editsupplier/${post._id}`} className='btn btn-warning'>
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </Link>
                &nbsp;
                {/* <button className="btn btn-success" onClick={() => markAsComplete(post._id)}>
                  <i className="fa-solid fa-circle-check"></i>&nbsp;Complete
                </button> */}
                &nbsp;
                <button className='btn btn-danger' onClick={() => deletePost(post._id)}>
                  <i className='fas fa-trash-alt'></i>&nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;  
