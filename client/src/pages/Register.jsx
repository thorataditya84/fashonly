import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { Link } from "react-router-dom";
import { publicRequest } from '../requestMethods';
import { useState } from 'react';
import { ArrowBack } from '@material-ui/icons';


const Container = styled.div`
    // width: 100vw;
    // height: calc(100vh - 60px - 30px - 260px);
    height: 80vh;
    // background-color: #f5fbfd;
    // background: linear-gradient(
    //     rgba(255, 255, 255, 0),
    //     rgba(255, 255, 255, 0.2)
    // ),
    // url('http://nairobiwire.com/wp-content/uploads/2020/02/mageto.jpg') center;
    // background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 500px;
    padding: 20px;
    background-color: white;
    border: 1px solid lightgray;
    box-shadow: 5px 5px 10px 5px lightgray;
    ${mobile({ width: '90%' })}
    // background-color: #f5fbfd;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-top: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin: 10px auto;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    width: 97%;
    // margin: 20px 8px 20px 0px;
    margin: 15px 0;
    text-align: justify;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:hover {
        box-shadow: 5px 5px 10px 5px lightgray;
    }
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`;



const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const data = {
        username,
        email,
        password
    };

    const handleSubmit = () => {
        try {
            publicRequest.post("/auth/register", data);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <>
            <Navbar />
            <Announcement />
            <Container>
                <Wrapper>
                <Link to="/"
                        style={{
                            fontSize: "15px",
                            color: "black",
                            cursor: "pointer",
                            textDecoration: "none"
                        }}
                    >
                        <ArrowBack style={{fontSize: "10px"}} />
                        {"\t\t"} Back to Home
                    </Link>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type='text'
                            placeholder='username'
                            onChange={(e) => setUsername(e.target.value.toLowerCase())}
                        />
                        <Input
                            type='email'
                            placeholder='email'
                            onChange={(e) => setEmail(e.target.value.toLowerCase())}
                        />
                        <Input
                            type='password'
                            placeholder='password'
                            onChange={(e) => setPassword(e.target.value.toLowerCase())}
                        />
                        <Input
                            type='password'
                            placeholder='confirm password'
                        />
                        <Agreement>
                            By creating an account, I consent to the processing of my personal data in accordance with the
                            <b><u> PRIVACY POLICY </u></b>
                        </Agreement>
                        <Button type='submit'>CREATE</Button>
                    </Form>
                    <Link to="/login"
                        style={{
                            fontSize: "12px",
                            color: "black",
                            cursor: "pointer"
                        }}
                    >
                        LOGIN TO ACCOUNT
                    </Link>
                </Wrapper>
            </Container>
            <Newsletter />
            <Footer />
        </>
    );
};


export default Register;