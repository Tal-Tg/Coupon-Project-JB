import { combineReducers, createStore } from "redux";
import { authReducer } from "./AuthState";
import { AdminReducer } from "./AdminState";
import { CouponReducer } from "./CouponState";
import { AdminCustomerReducer } from "./AdminCustomerState";
import { CompanyReducer } from "./CompanyState";
import { CustomerReducer } from "./CustomerState";
import { GuestReducer } from "./GuestState";






const reducers = combineReducers({authState: authReducer,couponsState: CouponReducer,adminState : AdminReducer,adminCustomerState : AdminCustomerReducer, companyState : CompanyReducer
,customerState:CustomerReducer,guestState : GuestReducer,});
const store = createStore(reducers)

export default store;