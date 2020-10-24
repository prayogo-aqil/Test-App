import React from 'react';
import './styles.css';

import { useStores } from '../../hook';
import { useHistory } from 'react-router-dom';
import { FormGroup, Label, Input} from 'reactstrap';
import { useState, } from 'react';


  const AboutUs = (props) => {
  let { accountStore } = useStores();
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <div>
      <div style={{marginTop: '12%', marginRight: '10%'}}>
      <div className="container">
          <form>
            <div>
            <div className="login">
              <h1> Login </h1>
              <div className="boxLogin">
           <FormGroup>
            <Label for="exampleAddress">Email address</Label>
            <Input type="text" name="address" id="exampleAddress"/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <i className="fa fa-eye password-icon" onClick={togglePasswordVisiblity}></i>
            <Input type={passwordShown ? "text" : "password"}  name="password" id="examplePassword"/>
          </FormGroup>
           </div>
           <FormGroup> 
            <button className="btn btn-lg btn-danger btn-block mt-5" onClick={() => history.push('/profile')}>Login</button>
          </FormGroup>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  
  );
};


export default AboutUs;
