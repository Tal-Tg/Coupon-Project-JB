import react, { Fragment, useEffect, useState } from 'react';
import {CustomerPage1Container,CustomerPage1Wrapper,GetCustomerCouponsHeader,CustomerCouponButton
    ,CustomerButtonEdit,CheckButton,CancelButton,
    DivAmountBuyersCount1,DivAmountBuyers1,DivLocation1,DivLetterFromPriceIcon1,DivLetterFromPrice1,DivLetterFrom1
    ,DivAmountDeprecated21,DivAmountDeprecated1,ProductInfo1,ProductTitle1,ProductHeading1,
    ProductImg1,ProductCard1,ProductsWrapper1,ProductsContainer1,ProductLinkForCard,GetAllCouponsContainer,GetAllCouponsWrapper,
    GetAllCouponsHeader,CustomerPageInputCategoryId,HeaderForInputCategory} from './CustomerPage1Elements';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import SendCustomerPurchaseModel from '../../../Model/CustomerModel/SendCustomerPurchaseModel';
import tokenAxios from '../../../Interceptor/Interceptor';
import store from '../../../Redux/Store';
import { addAction, downloadedAction } from '../../../Redux/CustomerState';
import notify from '../../../service/Notification';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';



function CustomerPage1(){
  useEffect(()=>{
    
    if(!store.getState().authState.user?.type.includes("CUSTOMER")){
        notify.error("Login please");
        history.push("/HomePage")
    }
})

    const history = useHistory();

    const [customerCoupons, setCustomerCoupons] = useState(store.getState().customerState.couponVsCustomer);
    const [couponsForPurchase, setCouponForPurchase] = useState([]);
    const [couponByCategory, setCouponByCategory] = useState([]);
    const [couponByMaxPrice, setCouponByMaxPrice] = useState([]);
    const[categoryId, setCategoryId] = useState();
    const[maxPrice, setMaxPrice] = useState();
    const [count,setCount] = useState(-1);
    const [edit,setEdit] = useState(false);
    const [editContactId, setEditContactId] = useState(0);


    const { register, handleSubmit, formState: { errors },reset } = useForm<SendCustomerPurchaseModel>({
        mode: "onTouched"
      });

      
      useEffect(() =>{
        const unsubscribe = store.subscribe(() => {
          setCustomerCoupons([]);
      });
      
      return unsubscribe;
     
      })
      
      useEffect(() =>{
        if(store.getState().customerState.couponVsCustomer.length > count){
            store.subscribe(() => setCustomerCoupons(store.getState().customerState.couponVsCustomer));
            getCustomerCoupons();
            getAllCoupons();
        }

      })

      async function getCustomerCoupons(){
          try {
              const response = await tokenAxios.get("http://localhost:8080/customer/coupon/"+store.getState().authState.user.id);
              store.dispatch(downloadedAction(response.data));
              setCustomerCoupons(response.data);
              setCount(store.getState().customerState.couponVsCustomer.length);
          } catch (error) {
              notify.error("something went wrong")
          }
      }

      async function getAllCoupons(){
        try {
          const response = await tokenAxios.get("http://localhost:8080/customer/all-coupon/"+store.getState().authState.user.id);
          setCouponForPurchase(response.data);
          
      } catch (error) {
          notify.error("something went wrong");
      }
      }



     async function purchaseACoupon(c : number){
      var decision = window.confirm("are you Sure you want to purchase this coupon?");
      if(decision){
        try {
          const response = await tokenAxios.post("http://localhost:8080/customer/coupon/"+c+"/"+store.getState().authState.user.id);
          store.dispatch(addAction(response.data));
          notify.success("purchase successfully")
          history.push("/a")
          history.push("/My-PersonalCU")
        } catch (error) {
          notify.error("something went wrong")
        }
      }
      
      }

      
      async function getCouponsByCategory() {
        try {
          const response = await tokenAxios.get("http://localhost:8080/customer/coupons-by-category/"+store.getState().authState.user.id +"/"+categoryId)
          setCouponByCategory(response.data)
          notify.success("getting successfully with category id " + categoryId)
        } catch (error) {
          notify.error("something went wrong")
        }
      }

      async function getCouponsByMaxPrice(){
        try {
          const response = await tokenAxios.get("http://localhost:8080/customer/coupons-by-maxPrice/"+store.getState().authState.user.id +"/"+maxPrice)
          setCouponByMaxPrice(response.data)
          notify.success("getting successfully with max price " + maxPrice)
        } catch (error) {
          notify.error("something went wrong")
        }
      }


      const handleInput = (event: { target: { value: any; }; }) => {
        setCategoryId(event.target.value);
      };
      
      const handleInputMaxPrice = (event: { target: { value: any; }; }) => {
        setMaxPrice(event.target.value);
      };




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
    
    
    return(
        <div>
        
        <br />
        <NavLink to="/HomePage"><HomeOutlinedIcon /></NavLink>/ Coupons
        <br /><br />

        <CustomerPage1Container>
          <CustomerPage1Wrapper>
            <GetCustomerCouponsHeader>Your Coupons</GetCustomerCouponsHeader>
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
                    {/* <StyledTableCell align="right">Delete&nbsp;</StyledTableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                
                  {customerCoupons? customerCoupons.map((c) => (
                    <Fragment>
                        <StyledTableRow key={c.id}>
                          <StyledTableCell component="th" scope="row"  key={c.id}>
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
                          {/* <StyledTableCell align="right"><button onClick={() => deleteCoupon(c.id)}><MdClose/></button> </StyledTableCell> */}
                        </StyledTableRow>
                        
                    </Fragment>
                    
                  )):""}
                </TableBody>
              </Table>
            </TableContainer>
                    
            </CustomerPage1Wrapper>
          </CustomerPage1Container>
  
  
        <br />
        <br />
        <CustomerPage1Container>
          <CustomerPage1Wrapper>
                    <GetCustomerCouponsHeader>Purchase a coupon</GetCustomerCouponsHeader>
                    <br />
                    <br />
            <ProductsContainer1>
            
            <ProductHeading1> &nbsp;&nbsp;&nbsp;&nbsp;{""}</ProductHeading1>
            <ProductsWrapper1>
            {couponsForPurchase.map((product, index) => {
                return(
                  // to={"/coupon/"+product.id}
                  <ProductLinkForCard onClick={() => purchaseACoupon(product.id)}  >
                    <ProductCard1 key={index}  >
                        <ProductImg1 src={product.image} alt={product.alt}/>
                        <ProductInfo1>
                            <ProductTitle1>{product.title} <DivAmountDeprecated1>{product.alt}₪</DivAmountDeprecated1></ProductTitle1>
                            <DivLetterFrom1>from- <DivLetterFromPrice1> {product.price}</DivLetterFromPrice1> <DivLetterFromPriceIcon1> ₪</DivLetterFromPriceIcon1> </DivLetterFrom1>
                            <DivAmountBuyers1><DivLocation1><img className="imgForLocation" src="https://media.groo.co.il/_media/images/header/icon-location.png"/></DivLocation1>&nbsp; {product.location}  <DivAmountBuyersCount1>Bought:&nbsp;{product.price}+&nbsp;  </DivAmountBuyersCount1></DivAmountBuyers1>
                            {/* <ProductDesc>{product.desc}</ProductDesc> */}
                            {/* <ProductPrice>{product.price}</ProductPrice> */}
                            {/* <ProductButton>{product.button}</ProductButton> */}
                        </ProductInfo1>
                    </ProductCard1>
                    </ProductLinkForCard>
                
                );
            })}
            </ProductsWrapper1>
        </ProductsContainer1>
                   
          </CustomerPage1Wrapper>
          </CustomerPage1Container>
         <div>
        <GetAllCouponsContainer>
          <GetAllCouponsWrapper>
          
          <GetAllCouponsHeader>Coupons By Category</GetAllCouponsHeader>
          <CustomerPageInputCategoryId>
            <HeaderForInputCategory>Enter here the category number </HeaderForInputCategory>
           <TextField id="category id" label="Category" variant="outlined" type="text"  
                        onChange={handleInput}/>
                          <br />
                          
                          <div onClick={() =>  getCouponsByCategory()}>Submit</div>
          </CustomerPageInputCategoryId>
          
        
        
        <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow >
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
                
                  {couponByCategory? couponByCategory.map((c) => (
                    <Fragment key={c.id}>
                        <StyledTableRow key={c.id}>
                          <StyledTableCell component="th" scope="row" key={c.id}>
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
            {couponByCategory.length} : coupons.
        </div> 
        
         <br />
        <br />
  
       
         <div>
        <GetAllCouponsContainer>
          <GetAllCouponsWrapper>
          
          <GetAllCouponsHeader>Coupons By Max price</GetAllCouponsHeader>
          <CustomerPageInputCategoryId>
            <HeaderForInputCategory>Enter here the max price </HeaderForInputCategory>
           <TextField id="max price" label="Max price" variant="outlined" type="text"  
                        onChange={handleInputMaxPrice}/>
                          <br />
                          
                          <div onClick={() =>  getCouponsByMaxPrice()}>Submit</div>
          </CustomerPageInputCategoryId>
          
        
        
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
                
                  {couponByMaxPrice? couponByMaxPrice.map((c) => (
                    <Fragment key={c.id}>
                        <StyledTableRow key={c.id}>
                          <StyledTableCell component="th" scope="row" key={c.id}>
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
            {couponByMaxPrice.length} : coupons.
            </div>
      
    </div>
    );
}

export default CustomerPage1;