import { TextField } from '@material-ui/core';
import react from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import ContectUsModel from '../../Model/ContectUsModel';
import notify from '../../service/Notification';
import Footer from '../Footer';
import Header from '../Header';
import { ContectUsContainer, ContectUsWrapper,ContectUsHeader,ContectUsInput,ContectUsTextArea,
    ContectUsHeaderForTextArea,ContectUsSubmit,ErrorSpan } from './ContectUsElemenst'

function ContectUs() {


    const { register, handleSubmit, formState: { errors } } = useForm<ContectUsModel>({
        mode: "onTouched"
    });

    const history = useHistory();

    function sendForm(){
        notify.success("thanks for contacting us :), you will be back to home page in 5 seconds")
        setTimeout(function () { goBckHome() }, 5000);
    }

    function goBckHome(){
        history.push("/HomePage")
    }

    return (
        <div>
            <Header />
            <ContectUsContainer>
                <ContectUsWrapper>
                    <ContectUsHeader>Contect-Us</ContectUsHeader>
                    <form onSubmit={handleSubmit(sendForm)}>
                    <ContectUsInput><TextField type="text" label="Name" variant="outlined" 
                    {...register("name", {required:{ value: true, message: "missing name" }, maxLength: 80})}/></ContectUsInput>
                    <ErrorSpan>{errors.name?.message}</ErrorSpan>
                    <br />
                    <ContectUsInput><TextField type="email" label="Email" variant="outlined"
                    {...register("email", {required: { value: true, message: "missing email" }, maxLength: 100})}/></ContectUsInput>
                    <ErrorSpan>{errors.email?.message}</ErrorSpan>
                    <br />
                    <ContectUsHeaderForTextArea>what do you want to tell us ?</ContectUsHeaderForTextArea>
                    <ContectUsTextArea {...register("text", {required: { value: true, message: "missing text area" }, maxLength: 200})} />
                    <br />
                    <ErrorSpan>{errors.text?.message}</ErrorSpan>
                    <br />
                    <ContectUsSubmit type="submit">Submit</ContectUsSubmit>
                    </form>
                </ContectUsWrapper>
            </ContectUsContainer>
            <Footer />


        </div>
    )
}

export default ContectUs