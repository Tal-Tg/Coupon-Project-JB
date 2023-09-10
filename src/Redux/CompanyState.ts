import CompanyModel from "../Model/AdminModels/CompanyModel";
import UpdateTableModel from "../Model/AdminModels/UpdateTableModel";
import UpdateTableCouponModel from "../Model/CompanyModels/UpdateTableCouponModel";
import CredentialsModel from "../Model/CredentialsModel";
import UserModel from "../Model/UserModel";

export class CompanyAppState{
    public coupons: UpdateTableCouponModel[] = [];
}



export enum CompanyActionType {
    CouponsDownloaded = "CouponsDownloaded",
    CouponAdded = "CouponAdded",
    CouponUpdated = "CouponUpdated",
    CouponDeleted = "CouponDeleted"
}


export interface CompanyAction {
    type: CompanyActionType;
    payload?: any; 
}

export function downloadedAction(coupons: UpdateTableCouponModel[]): CompanyAction {
    return { type: CompanyActionType.CouponsDownloaded,payload : coupons };
}

export function addAction(coupon: UpdateTableCouponModel): CompanyAction {
    return { type: CompanyActionType.CouponAdded ,payload : coupon};
}

export function UpdateAction(coupon: UpdateTableCouponModel): CompanyAction {
    return { type: CompanyActionType.CouponUpdated, payload : coupon };
}

export function DeletedAction(id : number): CompanyAction {
    return { type: CompanyActionType.CouponDeleted, payload: id };
}


export function CompanyReducer(currentState: CompanyAppState = new CompanyAppState(),action:CompanyAction): CompanyAppState{
   

    const newState = {...currentState} 
    switch(action.type){
        case CompanyActionType.CouponsDownloaded: 
            newState.coupons = action.payload;
            break;
        case CompanyActionType.CouponAdded:
            newState.coupons.push(action.payload);
            break;
        case CompanyActionType.CouponUpdated: 
            newState.coupons[action.payload.id]=action.payload;  
            break;
            case CompanyActionType.CouponDeleted: 
            newState.coupons = newState.coupons.filter(c=>c.id !== action.payload);
            break;
    }
    return newState;
    
}