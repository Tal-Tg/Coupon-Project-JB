import UpdateTableCouponModel from "../Model/CompanyModels/UpdateTableCouponModel";
import CustomerCouponModel from "../Model/CustomerModel/CutomerCouponModel";

export class CustomerAppState{
    public couponVsCustomer: CustomerCouponModel[] = [];
}



export enum CustomerActionType {
    CouponsDownloaded = "CouponsDownloaded",
    CouponAdded = "CouponAdded",
    CouponUpdated = "CouponUpdated",
    CouponDeleted = "CouponDeleted"
}


export interface CustomerAction {
    type: CustomerActionType;
    payload?: any; 
}

export function downloadedAction(couponVsCustomer: CustomerCouponModel[]): CustomerAction {
    return { type: CustomerActionType.CouponsDownloaded,payload : couponVsCustomer };
}

export function addAction(couponVsCustomer: CustomerCouponModel): CustomerAction {
    return { type: CustomerActionType.CouponAdded ,payload : couponVsCustomer};
}

export function UpdateAction(couponVsCustomer: UpdateTableCouponModel): CustomerAction {
    return { type: CustomerActionType.CouponUpdated, payload : couponVsCustomer };
}

export function DeletedAction(id : number): CustomerAction {
    return { type: CustomerActionType.CouponDeleted, payload: id };
}


export function CustomerReducer(currentState: CustomerAppState = new CustomerAppState(),action:CustomerAction): CustomerAppState{
   

    const newState = {...currentState} 
    switch(action.type){
        case CustomerActionType.CouponsDownloaded: 
            newState.couponVsCustomer = action.payload;
            break;
        case CustomerActionType.CouponAdded:
            newState.couponVsCustomer.push(action.payload);
            break;
        case CustomerActionType.CouponUpdated: 
            newState.couponVsCustomer[action.payload.id]=action.payload;  
            break;
            case CustomerActionType.CouponDeleted: 
            newState.couponVsCustomer = newState.couponVsCustomer.filter(c=>c.id !== action.payload);
            break;
    }
    return newState;
    
}