import React from 'react';
import './styles.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import { useStores } from '../../hook';
import icAvatar from '../../assets/images/avatar.png';

const Profile = (props) => {
  let { accountStore } = useStores();
  const history = useHistory();


  return (
    <>

  <div className="container">
    <div style={{marginTop: '25%'}}>
      <Form>
        <div className="profil">
            <h1> Profile </h1>
        </div>
        <div className="profil-j">
            <img src={icAvatar} style={{ width: 100, height: 100, textAlign: 'center' }} />
          <FormGroup>
            <Input type="file" name="photo" id="exampleAddress" placeholder="User Name" style={{ display: 'none' }} />
          </FormGroup>
        </div>

        <div className="name">
          <FormGroup>
            <Label for="exampleAddress">User Name</Label>
            <Input disabled type="text" name="address" id="exampleAddress" placeholder="User Name" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleAddress">Email</Label>
            <Input disabled type="text" name="address" id="exampleAddress" placeholder="Email" />
          </FormGroup>
          
          <FormGroup>
            <Label for="exampleAddress">Phone Number</Label>
            <Input disabled type="text" name="address" id="exampleAddress" placeholder="08138111124" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Gender</Label>
            <Input disabled type="select" name="select" id="exampleSelect">
              <option>Male</option>
              <option>Female</option>
            </Input>
          </FormGroup>
        </div>
          <FormGroup> 
            <button className="btn2 btn-lg btn-danger btn-block mt-5" onClick={() => history.push('/changepassword')}>Change Password</button>
            <button className="btn2 btn-lg btn-danger btn-block mt-3" onClick={() => history.push('/login')}>Logout</button>
          </FormGroup>
      </Form>
    </div>
  </div>
    </>
  );
};

export default Profile;
