import CouponModel from "../Model/CouponModel";


export class GuestAppState{
    public coupons: CouponModel[] = [];
}



export enum GuestActionType {
    GuestCouponsDownloaded = "CouponsDownloaded",
    GuestCouponAdded = "CouponAdded",
    GuestCouponUpdated = "CouponUpdated",
    GuestCouponDeleted = "CouponDeleted"
}


export interface GuestAction {
    type: GuestActionType;
    payload?: any; 
}

export function GuestDownloadedAction(coupons: CouponModel[]): GuestAction {
    return { type: GuestActionType.GuestCouponsDownloaded,payload : coupons };
}

export function GuestAddAction(coupon: CouponModel): GuestAction {
    return { type: GuestActionType.GuestCouponAdded ,payload : coupon};
}

export function GuestUpdateAction(coupon: CouponModel): GuestAction {
    return { type: GuestActionType.GuestCouponUpdated, payload : coupon };
}

export function GuestDeletedAction(id : number): GuestAction {
    return { type: GuestActionType.GuestCouponDeleted, payload: id };
}


export function GuestReducer(currentState: GuestAppState = new GuestAppState(),action:GuestAction): GuestAppState{
   

    const newState = {...currentState} 
    switch(action.type){
        case GuestActionType.GuestCouponsDownloaded: 
            newState.coupons = action.payload;
            break;
        case GuestActionType.GuestCouponAdded:
            newState.coupons.push(action.payload);
            break;
        case GuestActionType.GuestCouponUpdated: 
            newState.coupons[action.payload.id]=action.payload;  
            break;
            case GuestActionType.GuestCouponDeleted: 
            newState.coupons = newState.coupons.filter(c=>c.id !== action.payload);
            break;
    }
    return newState;
    
}