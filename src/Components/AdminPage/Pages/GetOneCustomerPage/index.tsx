import { TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import tokenAxios from '../../../../Interceptor/Interceptor';
import GetOneCustomerModel from '../../../../Model/AdminModels/GetOneCustomerModel';
import notify from '../../../../service/Notification';
import {GetOneCustomerContainer,GetOneCustomerWrapper,GetOneCustomerHeader,GetOneCustomerInput
    ,GetOneCustomerPErrors,SubmitButton} from './GetOneCustomerElements';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { NavLink } from 'react-router-dom';

function GetOneCustomer() {

    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm<GetOneCustomerModel>({
        mode: "onTouched"
    });

    async function send(getOneCustomer :GetOneCustomerModel ){
        

        try{ 
            const response = await tokenAxios.get("http://localhost:8080/admin/customer/"+getOneCustomer.id);
            notify.success('get successfully');
        }catch(err){
            notify.error(err.message);

        }

    }



    return (
        <div>
            {/* <br />
            <NavLink to="/HomePage"><HomeOutlinedIcon/></NavLink>/Get one Customer */}
            <br /><br />
            <GetOneCustomerContainer>
                <GetOneCustomerWrapper>
                <form onSubmit={handleSubmit(send)}>
                    <GetOneCustomerHeader>Get one customer</GetOneCustomerHeader>

                    <GetOneCustomerInput><TextField id="id" label="Customer id" variant="outlined" type="number"
                    {...register("id", {required: { value: true, message: "id is required" }, maxLength: { value: 6, message: "id is to long" }})} /></GetOneCustomerInput>
                    <GetOneCustomerPErrors>{errors.id?.message}</GetOneCustomerPErrors>

                    <SubmitButton><TextField id="password" type="submit" /></SubmitButton>
                    </form>
                </GetOneCustomerWrapper>
            </GetOneCustomerContainer>
        </div>
    )
}

export default GetOneCustomer;
