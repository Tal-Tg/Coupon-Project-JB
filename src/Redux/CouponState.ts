import CouponModel from "../Model/CouponModel";
import store from "./Store";


export class CouponAppState{
    public coupons : CouponModel[] = [];
}


export enum CouponActionsType{
    CouponsDownloaded = "CouponsDownloaded",
    CouponAdded = "CouponAdded",
    CouponUpdated = "CouponUpdated",
    CouponDeleted = "CouponDeleted"
}

export interface CouponAction {
    type: CouponActionsType;
    payload?: any;
}


export function couponsDownloadedAction(coupons: CouponModel[]): CouponAction {
    return { type: CouponActionsType.CouponsDownloaded, payload: coupons };
}

export function couponsAddedAction(coupon: CouponModel): CouponAction {
    return { type: CouponActionsType.CouponAdded, payload: coupon };
}

export function couponsUpdatedAction(coupon: CouponModel): CouponAction {
    return { type: CouponActionsType.CouponUpdated, payload: coupon };
}

export function couponDeletedAction(id:number): CouponAction {
    return { type: CouponActionsType.CouponDeleted, payload: id };
}


export function CouponReducer(currentState: CouponAppState = new CouponAppState(),action:CouponAction): CouponAppState{
    // const newState = new CatsAppState();
    // newState.cats = currentState.cats;

    const newState = {...currentState} //Spread Operator
    switch(action.type){
        case CouponActionsType.CouponsDownloaded:
            newState.coupons = action.payload;
            break;
        case CouponActionsType.CouponAdded:
            newState.coupons.push(action.payload);
            break;
        case CouponActionsType.CouponUpdated:
            //  const idx = newState.cats.filter(c => c.id === action.payload.id);
            //  newState.cats[idx]=action.payload;    
            break
            case CouponActionsType.CouponDeleted:
                newState.coupons = newState.coupons.filter(c=>c.id !== action.payload);
                break
    }
    return newState;
    
}



