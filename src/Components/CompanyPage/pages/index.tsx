import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import CompanyModel from '../../../Model/AdminModels/CompanyModel';
import UpdateTableCouponModel from '../../../Model/CompanyModels/UpdateTableCouponModel';
import {GetAllCouponsContainer,GetAllCouponsWrapper,GetAllCouponsHeader,CouponContainer,CouponButton,CompanyButtonEdit,CheckButton,
  CancelButton,GetAllCouponsButtonAdd,CompanyPageInputCategoryId,HeaderForInputCategory,CompanyPageSubmitButtonCategory} from './CompanyPageElements';
import store from '../../../Redux/Store';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CancelIcon from '@material-ui/icons/Cancel';
import { MdClose } from 'react-icons/md'
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import tokenAxios from '../../../Interceptor/Interceptor';
import { addAction, DeletedAction, downloadedAction, UpdateAction } from '../../../Redux/CompanyState';
import notify from '../../../service/Notification';




function CompanyPage1() {
  useEffect(()=>{
    
    if(!store.getState().authState.user?.type.includes("COMPANY")){
        notify.error("Login please");
        history.push("/HomePage")
    }
})
   
  const [coupons, setCoupons] = useState(store.getState().companyState.coupons);
  const[couponsByCategory, setCouponsByCategory] = useState([]);
  const[couponsByMaxPrice, setCouponsByMaxPrice] = useState([]);
  const[categoryId, setCategoryId] = useState();
  const[maxPrice, setMaxPrice] = useState();
  const [count, setCount] = useState(-1);
  const [edit, setEdit] = useState(false);

  const [editContactId, setEditContactId] = useState(0);
  const [addCoupon , setAddCoupon ] = useState(false);

  const history = useHistory();
  const { register, handleSubmit, formState: { errors },reset } = useForm<UpdateTableCouponModel>({
    mode: "onTouched"
  });


  async function send() {

    if (store.getState().adminCustomerState.customers.length > count) {
      try {
        const response = await tokenAxios.get("http://localhost:8080/company/coupon/"+store.getState().authState.user.id);
        store.dispatch(downloadedAction(response.data));
        setCoupons(store.getState().companyState.coupons);
        setCount(store.getState().companyState.coupons.length);
      } catch (error) {
        notify.error("");
      }
    } else {

    }

  }

  useEffect(() =>{
    const unsubscribe = store.subscribe(() => {
      setCoupons([]);
  });
  
  return unsubscribe;
 
  })

  useEffect(() => {
    store.subscribe(() => setCoupons(store.getState().companyState.coupons));
   
    send();
  })

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
  var decision = window.confirm("are you Sure you want to delete this coupon?");
  if(decision){
    try {
      const response = await tokenAxios.delete("http://localhost:8080/company/coupon/"+c+"/"+store.getState().authState.user.id);
      store.dispatch(DeletedAction(c));
      notify.success('delete successfully');
    } catch (e) {
      notify.error("something went wrong");
    }
  }
  
  
}

async function EditCoupon(c: UpdateTableCouponModel) {
  setEdit(!edit);
  setEditContactId(c.id)
}

async function sendEdit(c: UpdateTableCouponModel) {
  
  c.company = store.getState().authState.user.id;
  c.id = editContactId;
  
  if(c.id > 0 ){
    if(c.categoryId ==null ){
      notify.error("category id is required")
      reset({})
      return;
    }
    if(c.title == null){
      notify.error("title is required")
      reset({})
      return;
    }
    if(c.description == null){
      notify.error("description is required")
      reset({})
      return;
    }
    if(c.startDate == null){
      notify.error("start date is required")
      reset({})
      return;
    }
    if(c.endDate == null){
      notify.error("end date is required")
      reset({})
      return;
    }
    if(c.amount == null){
      notify.error("amount is required")
      reset({})
      return;
    }
    if(c.price == null){
      notify.error("price is required")
      reset({})
      return;
    }
    if(c.image == null){
      notify.error("image is required")
      reset({})
      return;
    }
    const decision = window.confirm("are you Sure you want to update this coupon?");
    if(decision){
      try {
        
        const response = await tokenAxios.put("http://localhost:8080/company/coupon/"+store.getState().authState.user.id, c);
        store.dispatch(UpdateAction(c));
        setEditContactId(0);
        setAddCoupon(false);
        setEdit(false);
        reset({})
        history.push("/a")
        history.push("/My-PersonalC")
        notify.success('edit successfully');
        return;
      } catch (err) {
        
        notify.error("something went wrong");
      }
    }
   
  
  }else{
    if(c.categoryId ==null ){
      notify.error("category id is required")
      reset({})
      return;
    }
    if(c.title == null){
      notify.error("title is required")
      reset({})
      return;
    }
    if(c.description == null){
      notify.error("description is required")
      reset({})
      return;
    }
    if(c.startDate == null){
      notify.error("start date is required")
      reset({})
      return;
    }
    if(c.endDate == null){
      notify.error("end date is required")
      reset({})
      return;
    }
    if(c.amount == null){
      notify.error("amount is required")
      reset({})
      return;
    }
    if(c.price == null){
      notify.error("price is required")
      reset({})
      return;
    }
    if(c.image == null){
      notify.error("image is required")
      reset({})
      return;
    }
    const decision = window.confirm("are you Sure you want to add this coupon?");
    if(decision){
      try{   
       // setCategoryId(0);
        const response = await tokenAxios.post("http://localhost:8080/company/coupon/"+store.getState().authState.user.id, c);
        store.dispatch(addAction(response.data));
        setEditContactId(0);
        setAddCoupon(false);
        setEdit(false);
        reset({})
        notify.success('added successfully');
        
        return;
      }catch(error){
        reset({})
        notify.error("something went wrong");
      }
    }
  }
  reset({})
}

  
  
async function getCompanyCategory() {
  try {
    const response = await tokenAxios.get("http://localhost:8080/company/couponByCategory/"+store.getState().authState.user.id+"/"+categoryId);
    setCouponsByCategory(response.data);
    console.log(response.data);
    notify.success("Get Coupons by category "+categoryId +" successfully");
  } catch (err) {
    notify.error("no category in this id");
  }
  
}

async function getCompanyMaxPrice() {
  try {
    const response = await tokenAxios.get("http://localhost:8080/company/couponByMaxPrice/"+store.getState().authState.user.id+"/"+maxPrice);
    setCouponsByMaxPrice(response.data);
    console.log(response.data);
    notify.success("Get Coupons by max price "+maxPrice +" successfully");
  } catch (err) {
    notify.error("something went wrong try again later");
  }
  
}

function cancelAll() {
  setEdit(!edit);
  setEditContactId(0);
  setAddCoupon(false);
}

function AddCoupon(){
  setAddCoupon(!addCoupon);
  setEdit(!edit);

}



const handleInput = (event: { target: { value: any; }; }) => {
  setCategoryId(event.target.value);
};

const handleInputMaxPrice = (event: { target: { value: any; }; }) => {
  setMaxPrice(event.target.value);
};




const classes = useStyles();


  
    return (
      <div>
      <form onSubmit={handleSubmit(sendEdit)}>
      <br />
      <NavLink to="/HomePage"><HomeOutlinedIcon /></NavLink>/ Coupons
      <br /><br />
      <GetAllCouponsContainer>
        <GetAllCouponsWrapper>
          <GetAllCouponsHeader>Coupons</GetAllCouponsHeader>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Coupons Details</StyledTableCell>
                  <StyledTableCell align="right">Id</StyledTableCell>
                  <StyledTableCell align="right">category id&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">title&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">description&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">start date&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">end date&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">amount&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">price&nbsp;&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">image&nbsp;</StyledTableCell>
                  {!edit ?<> <StyledTableCell align="right">Delete&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">Edit&nbsp;</StyledTableCell></>

                  :

                  <><StyledTableCell align="right">Cancel&nbsp;(C)</StyledTableCell>
                  <StyledTableCell align="right">Submit&nbsp;(S)</StyledTableCell></>}
                </TableRow>
              </TableHead>
              <TableBody>
              
                {coupons.map((c) => (
                  <Fragment>
                    {editContactId === c.id ? <StyledTableRow key={c.id}>
                      <StyledTableCell component="th" scope="row">
                        {c.title}
                      </StyledTableCell>
                      <StyledTableCell align="right">{c.id}</StyledTableCell>
                      <StyledTableCell align="right"><TextField id="categoryId" label="category" variant="outlined" type="number" placeholder="enter category id"
                      {...register("categoryId", { })} /></StyledTableCell>
                      <StyledTableCell align="right"><TextField id="title" label="title" variant="outlined" type="text" placeholder="enter title"
                      {...register("title", { })} /></StyledTableCell>
                      <StyledTableCell align="right"><TextField id="description" label="description" variant="outlined" type="text" placeholder="enter description"
                      {...register("description", {  })} /></StyledTableCell>
                       <StyledTableCell align="right"><TextField id="startDate" label="" variant="outlined" type="date" placeholder=""
                      {...register("startDate", {  })} /></StyledTableCell>
                       <StyledTableCell align="right"><TextField id="endDate" label="" variant="outlined" type="date" placeholder=""
                      {...register("endDate", {  })} /></StyledTableCell>
                       <StyledTableCell align="right"><TextField id="amount" label="amount" variant="outlined" type="number" placeholder="enter amount"
                      {...register("amount", {  })} /></StyledTableCell>
                       <StyledTableCell align="right"><TextField id="price" label="price" variant="outlined" type="number" placeholder="enter price"
                      {...register("price", { })} /></StyledTableCell>
                       <StyledTableCell align="right"><TextField id="image" label="image" variant="outlined" type="text" placeholder="enter image"
                      {...register("image", { })} /></StyledTableCell>
                      <StyledTableCell align="right"><CancelButton onClick={() => cancelAll()}><CancelIcon /></CancelButton></StyledTableCell>
                      <StyledTableCell align="right"><CheckButton type="submit" /></StyledTableCell>
                    </StyledTableRow>
                    
                      :

                      <StyledTableRow key={c.id}>
                        <StyledTableCell component="th" scope="row">
                          {c.title}
                        </StyledTableCell>
                        <StyledTableCell align="right">{c.id}</StyledTableCell>
                        <StyledTableCell align="right">{c.categoryId}</StyledTableCell>
                        <StyledTableCell align="right">{c.title} </StyledTableCell>
                        <StyledTableCell align="right">{c.description}</StyledTableCell>
                        <StyledTableCell align="right">{c.startDate}</StyledTableCell>
                        <StyledTableCell align="right">{c.endDate}</StyledTableCell>
                        <StyledTableCell align="right">{c.amount}</StyledTableCell>
                        <StyledTableCell align="right">{c.price}</StyledTableCell>
                        <StyledTableCell align="right">{c.image}</StyledTableCell>
                        <StyledTableCell align="right"><CouponButton onClick={() => deleteByX(c.id)}><MdClose /></CouponButton></StyledTableCell>
                        <StyledTableCell align="right"><CompanyButtonEdit onClick={() => EditCoupon(c)}><EditIcon /></CompanyButtonEdit></StyledTableCell>
                      </StyledTableRow>}
                      
                  </Fragment>
                  
                ))}
                  {!addCoupon?<><StyledTableRow key="add">
                        <StyledTableCell component="th" scope="row">
                        </StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"> </StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"><CompanyButtonEdit onClick={() => AddCoupon()} ><AddIcon/></CompanyButtonEdit></StyledTableCell>
                      </StyledTableRow></>
                      :
                      <><StyledTableRow key="add1">
                        <StyledTableCell component="th" scope="row">
                        </StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"><TextField id="categoryId" label="category id" variant="outlined" type="text" placeholder="category id"
                        {...register("categoryId", { })} /></StyledTableCell>
                        <StyledTableCell align="right"><TextField id="title" label="title" variant="outlined" type="text" placeholder="enter title"
                        {...register("title", { })} /> </StyledTableCell>
                        <StyledTableCell align="right"><TextField id="description" label="description" variant="outlined" type="text" placeholder="enter description"
                        {...register("description", { })} /></StyledTableCell>
                         <StyledTableCell align="right"><TextField id="startDate" label="start date" variant="outlined" type="date" placeholder="enter start date"
                        {...register("startDate", {  })} /></StyledTableCell>
                         <StyledTableCell align="right"><TextField id="endDate" label="end date" variant="outlined" type="date" placeholder="enter end date"
                        {...register("endDate", { })} /></StyledTableCell>
                         <StyledTableCell align="right"><TextField id="amount" label="amount" variant="outlined" type="text" placeholder="enter amount"
                        {...register("amount", {  })} /></StyledTableCell>
                         <StyledTableCell align="right"><TextField id="price" label="price" variant="outlined" type="text" placeholder="enter price"
                        {...register("price", {  })} /></StyledTableCell>
                         <StyledTableCell align="right"><TextField id="image" label="image" variant="outlined" type="text" placeholder="enter image"
                        {...register("image", { })} /></StyledTableCell>
                        <StyledTableCell align="right"><CompanyButtonEdit onClick={() => cancelAll()} ><CancelIcon /></CompanyButtonEdit></StyledTableCell>
                        <StyledTableCell align="right"><CheckButton type="submit" /></StyledTableCell>
                      </StyledTableRow></>}
              </TableBody>
            </Table>
          </TableContainer>
        </GetAllCouponsWrapper>
      </GetAllCouponsContainer>
      {store.getState().couponsState.coupons.length} : coupons.




      <br />
      <br />

     
      <div>
      <GetAllCouponsContainer>
        <GetAllCouponsWrapper>
        
        <GetAllCouponsHeader>Coupons By Category</GetAllCouponsHeader>
        <CompanyPageInputCategoryId>
          <HeaderForInputCategory>Enter here the category number </HeaderForInputCategory>
         <TextField id="category id" label="Category" variant="outlined" type="text"  
                      onChange={handleInput}/>
                        <br />
                        
                        <div onClick={() =>  getCompanyCategory()}>Submit</div>
        </CompanyPageInputCategoryId>
        
      
      
      <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Coupons Details</StyledTableCell>
                  <StyledTableCell align="right">Id</StyledTableCell>
                  <StyledTableCell align="right">category id&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">title&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">description&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">start date&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">end date&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">amount&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">price&nbsp;&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">image&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              
                {couponsByCategory? couponsByCategory.map((c) => (
                  <Fragment>
                      <StyledTableRow key={c.id}>
                        <StyledTableCell component="th" scope="row">
                          {c.title}
                        </StyledTableCell>
                        <StyledTableCell align="right">{c.id}</StyledTableCell>
                        <StyledTableCell align="right">{c.categoryId}</StyledTableCell>
                        <StyledTableCell align="right">{c.title} </StyledTableCell>
                        <StyledTableCell align="right">{c.description}</StyledTableCell>
                        <StyledTableCell align="right">{c.startDate}</StyledTableCell>
                        <StyledTableCell align="right">{c.endDate}</StyledTableCell>
                        <StyledTableCell align="right">{c.amount}</StyledTableCell>
                        <StyledTableCell align="right">{c.price}</StyledTableCell>
                        <StyledTableCell align="right">{c.image}</StyledTableCell>
                      </StyledTableRow>
                      
                  </Fragment>
                  
                )):""}
              </TableBody>
            </Table>
          </TableContainer>
          </GetAllCouponsWrapper>
          </GetAllCouponsContainer>
          {couponsByCategory.length} : coupons.
      </div>
      
       <br />
      <br />

     
      <div>
      <GetAllCouponsContainer>
        <GetAllCouponsWrapper>
        
        <GetAllCouponsHeader>Coupons By Max price</GetAllCouponsHeader>
        <CompanyPageInputCategoryId>
          <HeaderForInputCategory>Enter here the max price </HeaderForInputCategory>
         <TextField id="max price" label="Max price" variant="outlined" type="text"  
                      onChange={handleInputMaxPrice}/>
                        <br />
                        
                        <div onClick={() =>  getCompanyMaxPrice()}>Submit</div>
        </CompanyPageInputCategoryId>
        
      
      
      <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Coupons Details</StyledTableCell>
                  <StyledTableCell align="right">Id</StyledTableCell>
                  <StyledTableCell align="right">category id&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">title&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">description&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">start date&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">end date&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">amount&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">price&nbsp;&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">image&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              
                {couponsByMaxPrice? couponsByMaxPrice.map((c) => (
                  <Fragment>
                      <StyledTableRow key={c.id}>
                        <StyledTableCell component="th" scope="row">
                          {c.title}
                        </StyledTableCell>
                        <StyledTableCell align="right">{c.id}</StyledTableCell>
                        <StyledTableCell align="right">{c.categoryId}</StyledTableCell>
                        <StyledTableCell align="right">{c.title} </StyledTableCell>
                        <StyledTableCell align="right">{c.description}</StyledTableCell>
                        <StyledTableCell align="right">{c.startDate}</StyledTableCell>
                        <StyledTableCell align="right">{c.endDate}</StyledTableCell>
                        <StyledTableCell align="right">{c.amount}</StyledTableCell>
                        <StyledTableCell align="right">{c.price}</StyledTableCell>
                        <StyledTableCell align="right">{c.image}</StyledTableCell>
                      </StyledTableRow>
                      
                  </Fragment>
                  
                )):""}
              </TableBody>
            </Table>
          </TableContainer>
          </GetAllCouponsWrapper>
          </GetAllCouponsContainer>
          {couponsByMaxPrice.length} : coupons.
          </div>

      </form>
  </div>

    )
}

export default CompanyPage1
