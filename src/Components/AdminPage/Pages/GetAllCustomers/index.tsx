import React, { Fragment, useEffect, useState } from 'react';
import tokenAxios from '../../../../Interceptor/Interceptor';
import notify from '../../../../service/Notification';
import {GetAllCustomersContainer,GetAllCustomersWrapper,GetAllCustomersHeader,
  CustomerButtonEdit,CheckButton,CancelButton,GetAllCustomersPErrors,GetAllCustomerButtonAdd, CustomerButton,
  GetOneCustomerContainer,GetOneCustomerWrapper,GetOneCustomerHeader,HeaderForInputCustomer,AdminPageInputCustomerId
} from './GetAllCustomersElements';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { NavLink, useHistory } from 'react-router-dom';
import store from '../../../../Redux/Store';
import { addCustomerAction, CustomerDeletedAction, CustomerUpdateAction, downloadedAction } from '../../../../Redux/AdminCustomerState';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import UpdateTableModelCustomer from '../../../../Model/AdminModels/UpdateTableModelCustomer';
import { useForm } from 'react-hook-form';
import CustomerModel from '../../../../Model/AdminModels/CustomerModel';
import CancelIcon from '@material-ui/icons/Cancel';
import { MdClose } from 'react-icons/md'
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import GetOneCustomer from '../GetOneCustomerPage';
import { CompanyUpdateAction } from '../../../../Redux/AdminState';

function GetAllCustomers() {

    const history = useHistory();
    const [customers, setCustomers ] = useState(store.getState().adminCustomerState.customers);
    const [count, setCount] = useState(-1);
    const [edit, setEdit] = useState(false);
    const [editContactId, setEditContactId] = useState(0);
    const [addCustomer , setAddCustomer ] = useState(false);
    const [oneCustomer, setOneCustomer] = useState([])
    const[customerId, setCustomerId] = useState();
    
    const { register, handleSubmit, formState: { errors },reset } = useForm<UpdateTableModelCustomer>({
        mode: "onTouched"
      });

    async function send() {
        if(store.getState().adminCustomerState.customers.length > count){
        try{
            const response = await tokenAxios.get("http://localhost:8080/admin/customer");
            store.dispatch(downloadedAction(response.data));
            setCustomers(store.getState().adminCustomerState.customers);
            setCount(store.getState().adminCustomerState.customers.length);
            reset({});
        }catch(error){
            notify.error("something went wrong");
        }
        }else{

        }
    }

    useEffect(() =>{
      const unsubscribe = store.subscribe(() => {
        setCustomers([]);
        setOneCustomer([]);
    });
    
    return unsubscribe;
   
    })


    useEffect(() => {
        store.subscribe(() => setCustomers(store.getState().adminCustomerState.customers));
        send();
    });



    const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }),
  )(TableCell);

  const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }),
  )(TableRow);


  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  async function EditCustomer(c: CustomerModel) {
    setEdit(!edit);
    setEditContactId(c.id)
  }

  function cancelAll() {
    setEdit(false);
    setEditContactId(0);
    setAddCustomer(false);
  }

  async function sendEdit(c: UpdateTableModelCustomer) {
    c.id = editContactId;
    if(c.id !== 0){
      if(c.firstName == null){
        notify.error("first name is required")
        reset({})
        return;
      }
      if(c.lastName == null){
        notify.error("last name is required")
        reset({})
        return;
      }
      if(c.email == null){
        notify.error("email is required")
        reset({})
        return;
      }
      if(c.password == null){
        notify.error("password is required")
        reset({})
        return;
      }
      const decision = window.confirm("are you Sure you want to update this customer?");
      if(decision){

        try {
          const response = await tokenAxios.put("http://localhost:8080/admin/customer/"+ c.id,c);
          
          store.dispatch(CustomerUpdateAction(response.data));
          setEditContactId(0);
          setEdit(false);
          setAddCustomer(false);
          reset({})
          notify.success('edit successfully');
        } catch (err) {
          notify.error("something went wrong");
        }
      }
    }else{
      if(c.firstName == null){
        notify.error("first name is required")
        reset({})
        return;
      }
      if(c.lastName == null){
        notify.error("last name is required")
        reset({})
        return;
      }
      if(c.email == null){
        notify.error("email is required")
        reset({})
        return;
      }
      if(c.password == null){
        notify.error("password is required")
        reset({})
        return;
      }
      const decision = window.confirm("are you Sure you want to add this customer?");
      if(decision){

        try{
          const response = await tokenAxios.post("http://localhost:8080/admin/customer", c);
          store.dispatch(addCustomerAction(response.data));
          setEditContactId(0);
          reset({})
          setEdit(false);
          setAddCustomer(false);
          notify.success('added successfully');
        }catch(error){
          notify.error("something went wrong");
    
        }
      }
      }
    reset({});
  }

  async function deleteByX(c: number) {
    const decision = window.confirm("are you Sure you want to delete this customer?");
    if(decision){
      try {
        const response = await tokenAxios.delete("http://localhost:8080/admin/customer/" + c);
        store.dispatch(CustomerDeletedAction(c));
        reset({});
        notify.success('delete successfully');
      } catch (e) {
        notify.error("something went wrong");
      }
    }
  }

  function AddCustomer(){
    setAddCustomer(!addCustomer);
    setEdit(false);
    
  }

  const handleInput = (event: { target: { value: any; }; }) => {
    setCustomerId(event.target.value);
  };

  

  function getOneCustomer(){
    setOneCustomer(store.getState().adminCustomerState.customers.filter(c => c.id == customerId));
    notify.success("getting customer with id " + customerId +" successfully");
  }

    return (
        <div>
        <form onSubmit={handleSubmit(sendEdit)}>
        <br />
        <NavLink to="/HomePage"><HomeOutlinedIcon /></NavLink>/ Customers
        <br /><br />
        <GetAllCustomersContainer>
          <GetAllCustomersWrapper>
            <GetAllCustomersHeader>Customers</GetAllCustomersHeader>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table" key="1" >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Customer Details</StyledTableCell>
                    <StyledTableCell align="right">Id</StyledTableCell>
                    <StyledTableCell align="right">first name&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">last name&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">email&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">password&nbsp;</StyledTableCell>
                    {!edit ?<> <StyledTableCell align="right">Delete&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">Edit&nbsp;</StyledTableCell></>
                    :
                    <><StyledTableCell align="right">Cancel&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">Submit&nbsp;</StyledTableCell></>}
                  </TableRow>
                </TableHead>
                <TableBody>
               
                  {store.getState().adminCustomerState.customers.map((c) => (
                    <Fragment key={c.id}>

                      {editContactId === c.id ? <StyledTableRow key={c.id}>
                        <StyledTableCell component="th" scope="row" key={c.id}>
                          {c.firstName +" " + c.lastName}
                        </StyledTableCell>
                        <StyledTableCell align="right">{c.id}</StyledTableCell>
                        <StyledTableCell align="right"><TextField id="firstName" label="first name" variant="outlined" type="text" placeholder="enter first name"
                          {...register("firstName", {  })} /></StyledTableCell>
                        <StyledTableCell align="right"><TextField id="lastName" label="last name" variant="outlined" type="text" placeholder="enter last name"
                          {...register("lastName", { })} /></StyledTableCell>
                        <StyledTableCell align="right"><TextField id="email" label="email" variant="outlined" type="text" placeholder="enter email"
                          {...register("email", {  })} /></StyledTableCell>
                          <StyledTableCell align="right"><TextField id="password" label="password" variant="outlined" type="password" placeholder="enter password"
                          {...register("password", {})} /></StyledTableCell>
                        <StyledTableCell align="right"><CancelButton onClick={() => cancelAll()}><CancelIcon /></CancelButton></StyledTableCell>
                        <StyledTableCell align="right"><CheckButton type="submit" /></StyledTableCell>
                      </StyledTableRow>
                      
                        :

                        <StyledTableRow key={c.id}>
                          <StyledTableCell component="th" scope="row">
                          {c.firstName +" " + c.lastName}
                          </StyledTableCell>
                          <StyledTableCell align="right">{c.id}</StyledTableCell>
                          <StyledTableCell align="right">{c.firstName}</StyledTableCell>
                          <StyledTableCell align="right">{c.lastName} </StyledTableCell>
                          <StyledTableCell align="right">{c.email}</StyledTableCell>
                          <StyledTableCell align="right">{c.password}</StyledTableCell>
                          <StyledTableCell align="right"><CustomerButton onClick={() => deleteByX(c.id)}><MdClose /></CustomerButton></StyledTableCell>
                          <StyledTableCell align="right"><CustomerButtonEdit onClick={() => EditCustomer(c)}><EditIcon /></CustomerButtonEdit></StyledTableCell>
                        </StyledTableRow>}
                        
                    </Fragment>
                    
                  ))}
                  
                  

                    {!addCustomer?<><StyledTableRow key="add">
                          <StyledTableCell component="th" scope="row">
                          </StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"> </StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"><CustomerButtonEdit onClick={() => AddCustomer()} ><AddIcon/></CustomerButtonEdit></StyledTableCell>
                        </StyledTableRow></>

                        :
                        <><StyledTableRow key="add1">
                          <StyledTableCell component="th" scope="row">
                          </StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"><TextField id="firstName" label="first name" variant="outlined" type="text" placeholder="enter first name"
                          {...register("firstName", {  })} /></StyledTableCell>
                          <StyledTableCell align="right"><TextField id="lastName" label="last name" variant="outlined" type="text" placeholder="enter last name"
                          {...register("lastName", { })} /></StyledTableCell>
                          <StyledTableCell align="right"><TextField id="email" label="email" variant="outlined" type="text" placeholder="enter email"
                          {...register("email", {})} /> </StyledTableCell>
                          <StyledTableCell align="right"><TextField id="password" label="password" variant="outlined" type="text" placeholder="enter email"
                          {...register("password", { })} /></StyledTableCell>
                          <StyledTableCell align="right"><CustomerButtonEdit onClick={() => cancelAll()} ><CancelIcon /></CustomerButtonEdit></StyledTableCell>
                          <StyledTableCell align="right"><CheckButton type="submit" /></StyledTableCell>
                        </StyledTableRow></>}
                </TableBody>
              </Table>
            </TableContainer>
          </GetAllCustomersWrapper>
        </GetAllCustomersContainer>
        {store.getState().adminCustomerState.customers.length} Customers.
        <br />
       
        <GetOneCustomerContainer>
        <GetOneCustomerWrapper>
        
        <GetOneCustomerHeader>get one company</GetOneCustomerHeader>
        <AdminPageInputCustomerId>
          <HeaderForInputCustomer>Enter here the company id </HeaderForInputCustomer>
         <TextField id="companyId" label="company id" variant="outlined" type="text"  
                      onChange={handleInput}/>
                        <br />
                        
                        <div onClick={() =>  getOneCustomer()}>Submit</div>
        </AdminPageInputCustomerId>
        
      
      
      <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table" key="2">
              <TableHead key="1">
                <TableRow key="1">
                <StyledTableCell>Customer Details</StyledTableCell>
                    <StyledTableCell align="right">Id</StyledTableCell>
                    <StyledTableCell align="right">first name&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">last name&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">email&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">password&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              
                {oneCustomer? oneCustomer.map((c) => (
                  <Fragment key={c.id}>
                      <StyledTableRow key={c.id}>
                      <StyledTableCell component="th" scope="row" key={c.id}>
                          {c.firstName +" " + c.lastName}
                          </StyledTableCell>
                          <StyledTableCell align="right">{c.id}</StyledTableCell>
                          <StyledTableCell align="right">{c.firstName}</StyledTableCell>
                          <StyledTableCell align="right">{c.lastName} </StyledTableCell>
                          <StyledTableCell align="right">{c.email}</StyledTableCell>
                          <StyledTableCell align="right">{c.password}</StyledTableCell>
                      </StyledTableRow>
                      
                  </Fragment>
                  
                )):""}
              </TableBody>
            </Table>
          </TableContainer>
          </GetOneCustomerWrapper>
          </GetOneCustomerContainer>
        </form>
    </div>
    )
}

export default GetAllCustomers;
