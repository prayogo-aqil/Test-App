import React from 'react';
import './styles.css';
import { useStores } from '../../hook';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Row, Col, Label, Input } from 'reactstrap';
import { useState, } from 'react';

const Register = (props) => {
  let { accountStore } = useStores();
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div className="container">
      <div style={{marginTop: '15%'}}>
      <Form>
        <div>
            <div className="login">
              <h1> Register </h1>
         <div className="box">
          <FormGroup>
            <Label for="exampleAddress">Full Name</Label>
            <Input type="text" name="address" id="exampleAddress"/>
          </FormGroup>

          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                
                <Input type="email" name="email" id="exampleEmail"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <i className="fa fa-eye password-icon" onClick={togglePasswordVisiblity}></i>
                <Input type={passwordShown ? "text" : "password"} name="password" id="examplePassword"/>
              </FormGroup>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <FormGroup>
                <Label for="examplePassword">Re-Password</Label>
                <i className="fa fa-eye password-icon2" onClick={togglePasswordVisiblity}></i>
                <Input type={passwordShown ? "text" : "password"} name="password" id="examplePassword"/>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label for="exampleAddress">Phone Number</Label>
            <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
          </FormGroup>
        
          <FormGroup>
            <Label for="exampleSelect">Gender</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Male</option>
              <option>Female</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleAddress2">Date of Birth</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>
          </div>
           <FormGroup> 
            <button className="btn btn-lg btn-danger btn-block mt-5" onClick={() => history.push('/login')}>Register</button>
          </FormGroup>
          </div>
        </div>
      </Form>
      </div>
      </div>
    </>
  );
};

export default Register;
