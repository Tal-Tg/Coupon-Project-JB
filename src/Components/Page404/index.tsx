import react, { useEffect } from 'react'
import { useHistory } from 'react-router';
import notify from '../../service/Notification';
import Footer from '../Footer'
import Header from '../Header'
import { Page404Wrapper, Page404Container,Page404Header,Page404Image } from './Page404Elements'

function Page404() {

    const history = useHistory();

    function automatically(){
        notify.success("you will be back to home page automatically in 10 seconds")
        setTimeout(function () { goBckHome() }, 10000);
    }

    function goBckHome(){
        history.push("/HomePage")
    }
/*
    useEffect(()=>{
        automatically();
    })
*/

    return (


        <Page404Container >
            <Header />
            <Page404Wrapper>
            <br />
                <Page404Header>Page not found</Page404Header>
                <br />
                <br />
                <Page404Image src="https://media2.giphy.com/media/RJz880umeI8e3PXnzt/200w.webp?cid=ecf05e47p3e9fn57m8f4p7f82s2jovtaxhaem11bfkwo77kg&rid=200w.webp&ct=g" />
            </Page404Wrapper>

            <Footer />
        </Page404Container>

    )
}

export default Page404