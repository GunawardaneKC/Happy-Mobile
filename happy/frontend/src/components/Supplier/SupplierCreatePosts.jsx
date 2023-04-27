import React, { Component } from 'react'
import axios from 'axios';
export default class CreatePosts extends Component {

  constructor(props){
    super(props);
    this.state={
      SupplierID:"",
      Name:"",
      contactNumber:"",
      ItemList:"",
      // Brand:"",
      // Model:"",
      // reason:"",
      // givenDate:"",
      // customerAddress:"",
      // repairPrize:"",
    }
  }

  handleInputChange = (e) => {
    const {name, value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }


  onSubmit = (e) => {
    e.preventDefault();

    const {SupplierID, Name, contactNumber, ItemList} = this.state;

    const data = {
      SupplierID:SupplierID,
      Name:Name,
      contactNumber:contactNumber,
      ItemList:ItemList,
      // Brand:Brand,
      // Model:Model,
      // reason:reason,
      // givenDate:givenDate,
      // customerAddress:customerAddress,
      // repairPrize:repairPrize,
    }

    console.log(data)

    axios.post("/supplier/save",data).then((res) => {
      if(res.data.success){
        alert("New supplier added Successfully!");
        this.setState({
          SupplierID:"",
          Name:"",
          contactNumber:"",
          ItemList:"",
          // Brand:"",
          // Model:"",
          // reason:"",
          // givenDate:"",
          // customerAddress:"",
          // repairPrize:"",
        })
      }
    })

    

  }

  render() {
    return (

      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Add new supplier</h1>
        <form className='needs-validation' noValidate>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Supplier ID</label>
            <input type="text" 
            className='form-control'
            name='SupplierID'
            placeholder='Enter SupplierID'
            value={this.state.SupplierID}
            onChange={this.handleInputChange}
            required
            />
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>supplier Name</label>
            <input type="text" 
            className='form-control'
            name='Name'
            placeholder='Enter Name'
            value={this.state.Name}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Phone Number</label>
            <input type="number" 
            className='form-control'
            name='contactNumber'
            placeholder='Enter Post Category'
            value={this.state.contactNumber}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>ItemList</label>
            <input type="text" 
            className='form-control'
            name='ItemList'
            placeholder='Enter ItemList'
            value={this.state.ItemList}
            onChange={this.handleInputChange}/>
          </div>

          {/* <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Brand</label>
            <input type="text" 
            className='form-control'
            name='Brand'
            placeholder='Enter the Brand'
            value={this.state.Brand}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Model</label>
            <input type="text" 
            className='form-control'
            name='Model'
            placeholder='Enter the Model'
            value={this.state.Model}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Reason</label>
            <textarea 
            className='form-control'
            name='reason'
            placeholder='Enter the Reason'
            value={this.state.reason}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Date</label>
            <input type="date" 
            className='form-control'
            name='givenDate'
            placeholder='Enter the Date'
            value={this.state.givenDate}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Customer Address</label>
            <input type="text" 
            className='form-control'
            name='customerAddress'
            placeholder='Enter Customer Address'
            value={this.state.customerAddress}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Repair Price</label>
            <input type="text" 
            className='form-control'
            name='repairPrize'
            placeholder='Enter The Price'
            value={this.state.repairPrize}
            onChange={this.handleInputChange}/>
          </div> */}

          <button className='btn btn-success' type="submit" style={{marginTop: '15px'}} onClick={this.onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp;Save
          </button>

        </form>
      </div>
    );
  }
}
