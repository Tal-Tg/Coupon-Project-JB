import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import tokenAxios from '../../../../Interceptor/Interceptor';
import GetOneCompanyModel from '../../../../Model/AdminModels/GetOneCompanyModel';
import notify from '../../../../service/Notification';
import {GetOneCompanyContainer,GetOneCompanyWrapper,GetOneCompanyHeader,
    GetOneCompanyInput,GetOneCompanyPErrors,SubmitButton,OneCompanyWrapper,OneCompanyHeader,OneCompanyInfo
 } from './GetOneCompanyElements';
 import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { NavLink } from 'react-router-dom';
import CompanyModel from '../../../../Model/AdminModels/CompanyModel';
import store from '../../../../Redux/Store';
import { addCompanyAction } from '../../../../Redux/AdminState';
import { useEffect } from 'react';




function GetOneCompany() {
    

    

    



    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm<GetOneCompanyModel>({
        mode: "onTouched"
    });
    const companyModel = new CompanyModel();
    const [company , setCompany ] = useState(companyModel);
    
    async function send(getOneCompany :GetOneCompanyModel ){
        try{

            const response = await tokenAxios.get("http://localhost:8080/admin/company/"+getOneCompany.id);
            store.dispatch(addCompanyAction(response.data));
            setCompany(response.data);
            notify.success('get successfully');
            console.log(company)
            }catch(err){
            notify.error(err.message);
        }
    }

    
    
    return (
        <div>
            {/* <br />
            <NavLink to="/HomePage"><HomeOutlinedIcon/></NavLink>/Get on Company */}
            <br /><br />
            <GetOneCompanyContainer>
                <GetOneCompanyWrapper>
                <form onSubmit={handleSubmit(send)}>
                    <GetOneCompanyHeader>Get One Company</GetOneCompanyHeader>
                    <GetOneCompanyInput><TextField id="id" label="Company id" variant="outlined" type="number" 
                    {...register("id", {required: { value: true, message: "id is required" }, maxLength: { value: 5, message: "id is to long" }})} /></GetOneCompanyInput>
                    <GetOneCompanyPErrors>{errors.id?.message}</GetOneCompanyPErrors>
                    <SubmitButton><TextField type="submit" /></SubmitButton>
                    </form>
                    
                </GetOneCompanyWrapper>
            </GetOneCompanyContainer>
            <OneCompanyWrapper>
                <OneCompanyHeader>{company.name}</OneCompanyHeader>
                <OneCompanyInfo>Company id: {company.id}
                <br />
                Company name: {company.name}
                <br />
                Company email: {company.email}
                <br />
                </OneCompanyInfo>
            </OneCompanyWrapper>
            
            
            
        </div>
    )
}

export default GetOneCompany;
