import React, { Component } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import DeliveryAdmin from "./components/Delivery/DeliveryAdmin";
import EditDelivery from "./components/Delivery/EditDelivery";
import NavBar from "./components/NavBar";
import Profile from './components/Profile'
import Register from './components/Register';  
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import InsertDelivery from './components/Delivery/InsertDelivery';
import Home from './components/Home'; 
import Footer from './components/footer';
// import RepairCus from './components/Repair/RepairCus';
// import RepairAdmin from './components/Repair/RepairAdmin';
import AddProduct from './components/Product/AddProduct'; 
import AdminProduct from './components/Product/AdminProduct';
import EditProduct from './components/Product/Editproduct';
import CustomerAdmin from './components/Customer/CustomerAdmin';
import DeliveryPerson from './components/Delivery/DeliveryPerson';
import MaybeShowNavBar from './components/MaybeShowNavBar';
import Checkperson from './components/Delivery/Checkperson';
//import Adminacc from './components/Account/Adminacc';
import AddOrder from './components/Order/AddOrder';
import AddWarranty from './components/warrentyItem/WarrentyCus';
import AdminWarrenty from './components/warrentyItem/AdminWarrenty';
import EditWarranty from './components/warrentyItem/EditWarranty';
//import AdminEmp from './components/Account/ViewEmp'
import DeliveryR from './components/Report/DeliveryR'; 
import AdminRentItem from './components/Rent/AdminRentItem';
import AddRentItem from './components/Rent/AddRentItem';
import EditRentIem from './components/Rent/EditRentItem';
import RepairHome from './components/Repair/RepairHome';
import RepairCreatePosts from './components/Repair/RepairCreatePosts';
import RepairEditPost from './components/Repair/RepairEditPost';
import RepairPostDetails from './components/Repair/RepairPostDetails';
import RepairCompletedTable from './components/Repair/RepairCompletedTable';
import SupplierHome from './components/Supplier/SupplierHome';
import SupplierCreatePosts from './components/Supplier/SupplierCreatePosts';
import SupplierEditPost from './components/Supplier/SupplierEditPost';
import PostOrder from './components/Order/PostOrder';
import Adminorder from './components/Order/Adminorder'
import Editorder from './components/Order/Editorder';
// import OrderR from './components/Report/OrderR';
import Editemp from './components/Account/Editemp';
import Addemp from './components/Account/Addemp';
import AdminEmp from './components/Account/Adminacc';
import ViewEmp from './components/Account/ViewEmp';
import OrderR from './components/Report/OrderR';
import RentReqR from './components/Report/RentReqR';
import RentIem from './components/Rent/items';
import ProductR from './components/Report/ProductR';
import EmpR from './components/Report/EmpR';
import WarR from './components/Report/WarR';
import ReportRepair from './components/Report/RepairR'
import ReportHome from './components/Report/ReportHome';
import StockR from './components/Report/StockR';
import RentR from './components/Report/RentR';
 export default class App extends Component {
   render() {
     return (
       <div>
        <BrowserRouter>
        <MaybeShowNavBar>
        <NavBar/>
        </MaybeShowNavBar>
                
        <div className="container">
        <Routes>
        <Route exact path="/Home"  element={<Home/>}></Route> 
       
        <Route exact path="/admin"  element={<Dashboard/>}></Route> 
        {/* <Route exact path="/account"  element={<Adminacc/>}></Route>  */}
    

        <Route exact path="/profile"  element={<Profile/>}></Route> 
        <Route exact path="/"  element={<Login/>}></Route> 
       <Route exact path="/register"  element={<Register/>}></Route>

       {/* delivery Management part */}
        <Route exact path="/insertDelivery"  element={<InsertDelivery/>}></Route> 
        <Route exact path="/delivery/ad"  element={<DeliveryAdmin/>}></Route> 
        <Route exact  path="/edit/:id"  element={<EditDelivery/>}/>
        <Route exact path = "/delivery/person" element={<DeliveryPerson/> } />
        <Route exact path = "/editc/:id" element={<Checkperson/> } />
        <Route exact path = "/delivery/report" element={<DeliveryR/> } />
        

        <Route exact path="/customer/ad"  element={<CustomerAdmin/>}></Route> 


        //repair
            <Route path="/Repair" element={<RepairHome />} />
            <Route path="/addRepair" element={<RepairCreatePosts />} />
            <Route path="/editRepair/:id" element={<RepairEditPost />} />
            <Route path="/postRepair/:id" element={<RepairPostDetails />} />
            <Route path="/completedRepair" element={<RepairCompletedTable />} />
            <Route path="/repair/reports" element={<ReportRepair />} />

            //Supplier
            <Route path="/Supplier" element={<SupplierHome />} />
            <Route path="/addSupplier" element={<SupplierCreatePosts />} />
            <Route path="/editSupplier/:id" element={<SupplierEditPost />} />
            <Route path="/stockR" element={<StockR />} />

        <Route exact path="/addProduct"  element={<AddProduct/>}></Route> 
        <Route exact path="/adminManageProduct"  element={<AdminProduct/>}></Route>
        <Route exact path="/editProduct/:id"  element={<EditProduct/>}></Route>


        <Route exact path ="/:id" element={<AddOrder/>}></Route> 


        //warrenty
        <Route exact path="/Addwarrenty"  element={<AddWarranty/>}></Route> 
        <Route exact path="/Adminwarrenty"  element={<AdminWarrenty/>}></Route> 
        <Route exact path="/EditWarranty/:id" element={<EditWarranty/>}/>

        //emp
        {/* <Route exact path="/Emp"  element={<AdminEmp/>}></Route>  */}

        //rentItem
        <Route exact path ="/rentItem" element={<AdminRentItem/>}/>
        <Route exact path ="/add/rentItem" element={<AddRentItem/>}/>
        <Route exact path="/editrentitem/:id" element={<EditRentIem/>}/>
        <Route exact path="/rentItems" element={<RentIem/>}/>

        //order
        <Route exact path = "/addOrder"  element={<PostOrder/>}/>
        <Route exact path = "/adminorder"  element={<Adminorder/>}/>
        <Route exact path = "/editOrder/:id"  element={<Editorder/>}/>
        {/* <Route exact path = "/orderReport"  element={<OrderR/>}/> */}


        //emp
        <Route exact path="/Emp"  element={<ViewEmp/>}></Route> 
        <Route exact path="/admin/emp"  element={<AdminEmp/>}></Route> 
        <Route exact path="/Editemp/:id" element={<Editemp/>}></Route> 
        <Route exact path="/add/emp" element={<Addemp/>}></Route> 
        

        <Route exact path = "/report" element={<ReportHome/> } />
        <Route exact path = "/warrentyReport" element={<WarR/>}/>
        <Route exact path = "/productReport"  element={<ProductR/>}/>
        <Route exact path = "/delivery/report" element={<DeliveryR/> } />
        <Route exact path = "/orderReport"  element={<OrderR/>}/>
        <Route exact path = "/RentRep"  element={<RentR/>}/>
        < Route exact path="/rentreqr" element={<RentReqR/>}/>
        <Route exact path = "/Empreport" element={<EmpR/>}/>
       </Routes>
        </div>
        <Footer/>          
      </BrowserRouter>
       </div>
     )
   }
 }
 