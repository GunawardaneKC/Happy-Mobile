import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import  Button  from "react-bootstrap/Button";



export default class RentR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReportData: [],
    };
  }
  printDocument() {
    const input = document.getElementById("pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(255, 0, 0);
      doc.setFontSize(28);
      doc.text(85, 10, "Happy Mobile");
      doc.setTextColor(0, 0, 255);
      doc.setFontSize(16);
      doc.text(10, 70, "Rent Management");
      doc.setTextColor(0, 255, 0);
      doc.setFontSize(12);
      
      //Date
      var m_names = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      );

      var today = new Date();
      var seconds = today.getSeconds();
      var minutes = today.getMinutes();
      var hours = today.getHours();
      var curr_date = today.getDate();
      var curr_month = today.getMonth();
      var curr_year = today.getFullYear();

      today =
        m_names[curr_month] +
        " " +
        curr_date +
        "/ " +
        curr_year +
        " | " +
        hours +
        "h : " +
        minutes +
        "min : " +
        seconds +
        "sec";
      var newdat = today;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(130, 93, newdat);
      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
      const date = Date().split(" ");
      // we use a date string to generate our filename.
      const dateStr =
        "Rent_Management" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  }

  viewPosts(){
    axios.get("/rentItems").then(res =>{
      if(res.data.success){
        this.setState({
          ReportData:res.data.existingPosts,
                    
        });
        //show array list 
        console.log(this.state.posts )
         
      }
    });
  }

  componentDidMount() {
    this.viewPosts()
  }

  render() {
    return (
      <>
      <div className='container' id="pdfdiv">
         <div className='row my-4'>
          <div className='col-lg-12'>
            <div className='table-responsive'> 
       <table className="table table-striped text-center" >
           <thead>
             <tr className='table-dark'>
             <th scope="col">Index</th>
             <th scope="col">ProductName</th>
             <th scope="col">SKU</th>
             <th scope="col">Model</th>
             <th scope="col">UPC</th>
             <th scope="col">Price</th>
             <th scope="col">Features</th>
                          
             </tr>
           </thead>
         
         <tbody style={{background:'pink'}}>
            {this.state.ReportData.map((posts,index)=>(
                 <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{posts.ProductName}</td>
                    <td>{posts.SKU}</td>
                    <td>{posts.Model}</td>
                    <td>{posts.UPC}</td>
                    <td>{posts.Price}</td>
                    <td>{posts.Features}</td>
                    <td><img src={posts.Rentimage} width={50}/></td>
                     
                    
                    
                 </tr>

            ))}
         </tbody>
       </table>
       
      
      </div></div></div></div>
        <center>
          <div>
            <Button
              className="btn btn-warning"
              onClick={this.printDocument}
              variant="contained"
              color="primary"
            > <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
              Download PDF
            </Button>
            <br />
          </div>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}