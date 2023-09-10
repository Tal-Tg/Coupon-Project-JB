import CompanyModel from "../Model/AdminModels/CompanyModel";
import CustomerModel from "../Model/AdminModels/CustomerModel";
import UpdateTableModel from "../Model/AdminModels/UpdateTableModel";
import CredentialsModel from "../Model/CredentialsModel";
import UserModel from "../Model/UserModel";

export class AdminCustomerAppState {
    public customers: CustomerModel[] = [];
}



export enum AdminCustomerActionType {
    CustomersDownloaded = "CustomersDownloaded",
    CustomerAdded = "CustomerAdded",
    CustomerUpdated = "CustomerUpdated",
    CustomerDeleted = "CustomerDeleted"
}


export interface AdminCustomerAction {
    type: AdminCustomerActionType;
    payload?: any;
}

export function downloadedAction(customers: CustomerModel[]): AdminCustomerAction {
    return { type: AdminCustomerActionType.CustomersDownloaded, payload: customers };
}

export function addCustomerAction(customer: CustomerModel): AdminCustomerAction {
    return { type: AdminCustomerActionType.CustomerAdded, payload: customer };
}

export function CustomerUpdateAction(customer: CustomerModel): AdminCustomerAction {
    return { type: AdminCustomerActionType.CustomerUpdated, payload: customer };
}

export function CustomerDeletedAction(id: number): AdminCustomerAction {
    return { type: AdminCustomerActionType.CustomerDeleted, payload: id };
}


export function AdminCustomerReducer(currentState: AdminCustomerAppState = new AdminCustomerAppState(), action: AdminCustomerAction): AdminCustomerAppState {

    const newState = { ...currentState }
    switch (action.type) {
        case AdminCustomerActionType.CustomersDownloaded:
            newState.customers = action.payload;

            break;
        case AdminCustomerActionType.CustomerAdded:
            newState.customers.push(action.payload);

            break;
        case AdminCustomerActionType.CustomerUpdated:
            newState.customers[action.payload.id] = action.payload;
            break;

        case AdminCustomerActionType.CustomerDeleted:
            newState.customers = newState.customers.filter(c => c.id !== action.payload);
            break;
    }
    return newState;

}