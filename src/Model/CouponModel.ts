import companyModel from "./AdminModels/CompanyModel";

class CouponModel{
    id?:number;
    name?:string
    categoryId?: number;
    description?:string;
    image?:string;
    price?:string;
    title?:string;
    alt?:string;
    bought?:string;
    location?:string;
}

export default CouponModel;