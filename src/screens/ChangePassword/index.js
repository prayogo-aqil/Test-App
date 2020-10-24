import React from 'react';
import './styles.css';

import { useStores } from '../../hook';
import { FormGroup, Label, Input} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useState, } from 'react';

const ChangePassword = (props) => {
  let { accountStore } = useStores();
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


  return (
    <>
    <div style={{ position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'space-between', height: 50, padding: 10, background: 'none' }}>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div />
      </div>
    <div>
      <div style={{marginTop: '7%', marginRight: '15%'}}>
      <div className="container">
          <form>
            <div>
            <div className="Cpassword">
              <h1> Change Password </h1>
              <div className="boxPass">
           <FormGroup>
            <Label for="exampleAddress">Email address</Label>
            <Input type="text" name="address" id="exampleAddress"/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <i className="fa fa-eye password-icon" onClick={togglePasswordVisiblity}></i>
            <Input type={passwordShown ? "text" : "password"}  name="password" id="examplePassword"/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">New Password</Label>
            <i className="fa fa-eye password-icon1" onClick={togglePasswordVisiblity}></i>
            <Input type={passwordShown ? "text" : "password"}  name="password" id="examplePassword"/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">New Password</Label>
            <i className="fa fa-eye password-icon2" onClick={togglePasswordVisiblity}></i>
            <Input type={passwordShown ? "text" : "password"}  name="password" id="examplePassword"/>
          </FormGroup>
           </div>
           <FormGroup> 
            <button className="btn btn-lg btn-danger btn-block mt-5" onClick={() => history.push('/login')}>Change Password</button>
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

export default ChangePassword;
