import CompanyModel from "../Model/AdminModels/CompanyModel";
import UpdateTableModel from "../Model/AdminModels/UpdateTableModel";
import CredentialsModel from "../Model/CredentialsModel";
import UserModel from "../Model/UserModel";

export class AdminAppState{
    public companies: CompanyModel[] = [];
}



export enum AdminActionType {
    CompaniesDownloaded = "CompaniesDownloaded",
    CompanyAdded = "CompanyAdded",
    CompanyUpdated = "CompanyUpdated",
    CompanyDeleted = "CompanyDeleted"
}


export interface AdminAction {
    type: AdminActionType;
    payload?: any; 
}

export function downloadedAction(companies: CompanyModel[]): AdminAction {
    return { type: AdminActionType.CompaniesDownloaded,payload:companies };
}

export function addCompanyAction(company: CompanyModel): AdminAction {
    return { type: AdminActionType.CompanyAdded ,payload:company};
}

export function CompanyUpdateAction(company: CompanyModel): AdminAction {
    return { type: AdminActionType.CompanyUpdated, payload: company };
}

export function CompanyDeletedAction(id : number): AdminAction {
    return { type: AdminActionType.CompanyDeleted, payload: id };
}


export function AdminReducer(currentState: AdminAppState = new AdminAppState(),action:AdminAction): AdminAppState{
   

    const newState = {...currentState} 
    switch(action.type){
        case AdminActionType.CompaniesDownloaded: 
            newState.companies = action.payload;
            break;
        case AdminActionType.CompanyAdded:
            newState.companies.push(action.payload);
            break;
        case AdminActionType.CompanyUpdated: 
            newState.companies[action.payload.id]=action.payload;  
            break;
        case AdminActionType.CompanyDeleted: 
            newState.companies = newState.companies.filter(c=>c.id !== action.payload);
        break;
    }
    return newState;
    
}