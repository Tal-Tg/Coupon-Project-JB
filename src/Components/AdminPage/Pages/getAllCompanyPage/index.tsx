import React, { useEffect, useState } from 'react';
import tokenAxios from '../../../../Interceptor/Interceptor';
import notify from '../../../../service/Notification';
import {
  GetAllCompanyContainer, GetAllCompanyWrapper, GetAllCompanyHeader, CompanyButtonEdit,
  CheckButton, CompanyButton, CancelButton, GetOneCompanyContainer,GetOneCompanyWrapper,GetOneCompanyHeader
,HeaderForInputCompany,AdminPageInputCompanyId} from './GetAllCompaniesElements'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { NavLink, useHistory } from 'react-router-dom';
import CompanyModel from '../../../../Model/AdminModels/CompanyModel';
import store from '../../../../Redux/Store';
import { addCompanyAction, CompanyDeletedAction, CompanyUpdateAction, downloadedAction } from '../../../../Redux/AdminState';
import TableAdmin from '../../TableAdmin/TableCompany';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MdClose } from 'react-icons/md'
import EditIcon from '@material-ui/icons/Edit';
import GetOneCompany from '../GetOneCompanyPage';
import { Fragment } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import { useForm } from 'react-hook-form';
import UpdateTableModel from '../../../../Model/AdminModels/UpdateTableModel';
import { TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Unsubscribe } from "redux";

function GetAllCompany() {

 
  
  useEffect(() =>{
    const unsubscribe = store.subscribe(() => {
      setCompanies([]);
      setOneCompany([]);
  });
  
  return unsubscribe;
 
  })

  useEffect(() => {
    send();
    store.subscribe(() => setCompanies(store.getState().adminState.companies));
    
  });

  

  
  const [companies, setCompanies] = useState(store.getState().adminState.companies);
  const [count, setCount] = useState(-1);
  const [edit, setEdit] = useState(false);
  const [companyId, setCompanyId] = useState();
  const [editContactId, setEditContactId] = useState(0);
  const [addCompany , setAddCompany ] = useState(false);
  const [oneCompany, setOneCompany] = useState([]);
 

  const history = useHistory();
  const { register, handleSubmit, formState: { errors } ,reset } = useForm<UpdateTableModel>({
    mode: "onTouched"
  });


  async function send() {

    if (store.getState().adminState.companies.length > count) {
      
      try {
        const response = await tokenAxios.get("http://localhost:8080/admin/company");
        store.dispatch(downloadedAction(response.data));
        setCompanies([response.data]);
        setCompanies(store.getState().adminState.companies);
        setCount(store.getState().adminState.companies.length);

      } catch (error) {
        notify.error("something went wrong...");
      }
    } else {

    }

  }

 

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

  async function deleteByX(c: number) {
    const decision = window.confirm("are you Sure you want to delete this company?");
    if(decision){
      try {
        const response = await tokenAxios.delete("http://localhost:8080/admin/company/" + c);
        store.dispatch(CompanyDeletedAction(c));
        notify.success('delete successfully');
      } catch (e) {
        notify.error("something went wrong");
      }

    }
  }

  async function EditCompany(c: CompanyModel) {
    setEdit(!edit);
    setEditContactId(c.id)
  }

  async function sendEdit(c: UpdateTableModel ) {
    
    c.id = editContactId;
    if(c.id > 0){
      if(c.email == null){
        notify.error("email cannot be empty")
        reset({})
        return;
      }
      if(c.password == null){
        notify.error("password cannot be empty")
        reset({})
        return;
      }
      const decision = window.confirm("are you Sure you want to update this company?");
      if(decision){

        try {
          const response = await tokenAxios.put("http://localhost:8080/admin/update/"+c.id, c);
          
          store.dispatch(CompanyUpdateAction(response.data));
          setEditContactId(0);
          setEdit(false);
          setAddCompany(false);
          reset({}) 
          notify.success('edit successfully');
        } catch (err) {
          notify.error("edit failed");
          reset({}) 
        }
      }
   }else if(c.id ===0){
    if(c.name == null){
      notify.error("name cannot be empty")
      reset({})
      return;
    }
    if(c.email == null){
      notify.error("email cannot be empty")
      reset({})
      return;
    }
    if(c.password == null){
      notify.error("password cannot be empty")
      reset({})
      return;
    }
    const decision = window.confirm("are you Sure you want to add this company?");
    if(decision){
      try{
        const response = await tokenAxios.post("http://localhost:8080/admin/company", c);
        console.log(response.data);
        store.dispatch(addCompanyAction(response.data));
        setEditContactId(0);
        setEdit(false);
        setAddCompany(false);
        reset({}) 
        notify.success('added successfully');
      }catch(error){
        notify.error("add failed");
        reset({}) 
      }
    }
    }
    reset({});
    
  }

  function cancelAll() {
    setEdit(false);
    setEditContactId(0);
    setAddCompany(false);
    
  }

  function AddCompany(){
    
    setAddCompany(!addCompany);
    setEditContactId(0);
    setEdit(!edit);
    

  }

  const handleInput = (event: { target: { value: any; }; }) => {
    setCompanyId(event.target.value);
  };

  function deployMessage(error : string){
    notify.error(error);
  }

  function getOneCompany(){
    setOneCompany(store.getState().adminState.companies.filter(c => c.id == companyId));
    notify.success("getting company with id " + companyId +" successfully");
  }

  const classes = useStyles();

  return (

    <div>
        <form onSubmit={handleSubmit(sendEdit)}>
        <br />
        <NavLink to="/HomePage"><HomeOutlinedIcon /></NavLink>/ Companies
        <br /><br />
        <GetAllCompanyContainer>
          <GetAllCompanyWrapper>
            <GetAllCompanyHeader>Companies</GetAllCompanyHeader>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table" >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Company Details</StyledTableCell>
                    <StyledTableCell align="right">Id</StyledTableCell>
                    <StyledTableCell align="right">name&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">Password&nbsp;</StyledTableCell>
                    {/* <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell> */}
                    
                    {!edit ?<> <StyledTableCell align="right">Delete&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">Edit&nbsp;</StyledTableCell></>

                    :

                    <><StyledTableCell align="right">Cancel&nbsp;(C)</StyledTableCell>
                    <StyledTableCell align="right">Submit&nbsp;(S)</StyledTableCell></>}
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                
                  {companies?.map((c) => 
                    <Fragment  key={c.id}>
                      {editContactId === c.id ? <StyledTableRow key={c.id}>

                        <StyledTableCell component="th" scope="row">
                          {c.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{c.id}</StyledTableCell>
                        <StyledTableCell align="right">{c.name}</StyledTableCell>
                        <StyledTableCell align="right"><TextField id="email" label="email" variant="outlined" type="email" placeholder="enter email"
                        {...register("email", { })} /></StyledTableCell>
                        {/* <SpanErrors>{errors.email?.message}</SpanErrors> */}
                        <StyledTableCell align="right"><TextField id="password" label="password" variant="outlined" type="password" placeholder="enter password"
                        
                        {...register("password", {  })} /></StyledTableCell>
                        {/* <SpanErrors>{errors.password?.message}</SpanErrors> */}
                        <StyledTableCell align="right"><CancelButton onClick={() => cancelAll()}><CancelIcon /></CancelButton></StyledTableCell>
                        <StyledTableCell align="right"><CheckButton type="submit" /></StyledTableCell>
                      </StyledTableRow>
                      
                        :

                        <StyledTableRow key={c.id}>
                          <StyledTableCell component="th" scope="row">
                            {c.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">{c.id}</StyledTableCell>
                          <StyledTableCell align="right">{c.name}</StyledTableCell>
                          <StyledTableCell align="right">{c.email} </StyledTableCell>
                          <StyledTableCell align="right">{c.password}</StyledTableCell>
                          {/* <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell> */}
                          
                          <StyledTableCell align="right"><CompanyButton onClick={() => deleteByX(c.id)}><MdClose /></CompanyButton></StyledTableCell>
                          <StyledTableCell align="right"><CompanyButtonEdit onClick={() => EditCompany(c)}><EditIcon /></CompanyButtonEdit></StyledTableCell>
                        </StyledTableRow>}
                        
                    </Fragment>
                    
                  )}
                  
                  

                    {!addCompany?<><StyledTableRow key="add">
                          <StyledTableCell component="th" scope="row">
                          </StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"> </StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          {/* <StyledTableCell align="right"></StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell> */}
                          <StyledTableCell align="right"><CompanyButtonEdit onClick={() => AddCompany()} ><AddIcon/></CompanyButtonEdit></StyledTableCell>
                        </StyledTableRow></>

                        :
                        <StyledTableRow key="add1">
                          <StyledTableCell component="th" scope="row">
                          </StyledTableCell>
                          <StyledTableCell align="right"></StyledTableCell>
                          
                          <StyledTableCell align="right"><TextField id="name" label="name" variant="outlined" type="text" placeholder="enter name"
                          {...register("name", { })} /></StyledTableCell>
                          {/* <SpanErrors>{errors.name?.message}</SpanErrors> */}
                          <StyledTableCell align="right"><TextField id="email" label="email" variant="outlined" type="text" placeholder="enter email"
                          {...register("email", { })} /> </StyledTableCell>
                          {/* <SpanErrors>{errors.email?.message}</SpanErrors>
                          <br />
                           */}
                          <StyledTableCell align="right"><TextField id="password" label="password" variant="outlined" type="text" placeholder="enter email"
                          {...register("password", { })} /></StyledTableCell>
                          {/* <SpanErrors>{errors.password?.message}</SpanErrors> */}
                          <StyledTableCell align="right"><CompanyButtonEdit onClick={() => cancelAll()} ><CancelIcon /></CompanyButtonEdit></StyledTableCell>
                          <StyledTableCell align="right"><CheckButton type="submit" /></StyledTableCell>
                        </StyledTableRow>}
                </TableBody>
              </Table>
            </TableContainer>
          </GetAllCompanyWrapper>
         
        </GetAllCompanyContainer>
        {store.getState().adminState.companies.length} Companies.
        <br />
        
        <GetOneCompanyContainer>
        <GetOneCompanyWrapper>
        
        <GetOneCompanyHeader>get one company</GetOneCompanyHeader>
        <AdminPageInputCompanyId>
          <HeaderForInputCompany>Enter here the company id </HeaderForInputCompany>
         <TextField id="companyId" label="company id" variant="outlined" type="text"  
                      onChange={handleInput}/>
                        <br />
                        
                        <div onClick={() =>  getOneCompany()}>Submit</div>
        </AdminPageInputCompanyId>
        
      
      
      <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                <StyledTableCell>Company Details</StyledTableCell>
                    <StyledTableCell align="right">Id</StyledTableCell>
                    <StyledTableCell align="right">name&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">Password&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              
                {oneCompany? oneCompany.map((c) => (
                  <Fragment  key={c.id}>
                      <StyledTableRow key={c.id}>
                      <StyledTableCell component="th" scope="row">
                            {c.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">{c.id}</StyledTableCell>
                          <StyledTableCell align="right">{c.name}</StyledTableCell>
                          <StyledTableCell align="right">{c.email} </StyledTableCell>
                          <StyledTableCell align="right">{c.password}</StyledTableCell>
                      </StyledTableRow>
                      
                  </Fragment>
                  
                )):""}
              </TableBody>
            </Table>
          </TableContainer>
          </GetOneCompanyWrapper>
          </GetOneCompanyContainer>
       </form>
       
    </div>

  )
}



export default GetAllCompany;


