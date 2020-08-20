import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { withAuthorization } from '../Session';

import { toast } from 'react-toastify';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: '',
      firstName:'',
      lastName:'',
      school:'',
      standing:'',
      image: '',
      url: ''
    };

    this.handleUpload = this.handleUpload.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.publish = this.publish.bind(this);
  };

  handleUpload = () => {
    const uploadTask = this.props.firebase.storage.ref(`images/${this.state.image.name}`).put(this.state.image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
    () => {
      this.props.firebase.storage
      .ref("images")
      .child(this.state.image.name)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        this.setState({url});
      })
    }
    )
  };

  handleImageChange = e => {
    if(e.target.files[0]) {
      this.setState({
        image: e.target.files[0]
      });
      }
  };

  componentDidMount() {
    this.props.firebase.getProfileInfo((profileInfo) => {
      this.setState(profileInfo);
      console.log(profileInfo)
    });
  }
  

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }



publish() {
  const profile = {
    aboutMe: this.state.aboutMe,
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    school: this.state.school,
    standing: this.state.standing,
    
  };
  this.props.firebase.updateProfileInfo(profile);
  toast("Saved");
};



 render = () => (
    <Container>

<Alert variant="light">
        Profile Settings
        </Alert>

    <Form>
      
    <Form.Label>Name</Form.Label>
  <Row>
    <Col>
      <Form.Control placeholder="First name" value={this.state.firstName} id="firstName" onChange={this.handleChange} />
    </Col>
    <Col>
      <Form.Control placeholder="Last name"  value={this.state.lastName} id="lastName" onChange={this.handleChange}/>
    </Col>
  </Row>

  <br/>

  <Form.Group controlId="exampleForm.School">
    <Form.Label>School</Form.Label>
    <Form.Control as="select" 
      value ={this.state.school} id="school" onChange={this.handleChange}>
      <option>California State University, Bakersfield</option>
      <option>California State University, Channel Islands</option>
      <option>California State University, Chico</option>
      <option>California State University, Dominguez Hills</option>
      <option>California State University, Fullerton</option>
      <option>California State University, Los Angeles</option>
      <option>University of California, Berkeley</option>
      <option>University of California, Irvine</option>
      <option>University of California, Los Angeles</option>
      <option>University of California, Riverside</option>
      <option>University of California, San Diego</option>
    </Form.Control>
  </Form.Group>


  <br/>

  <Form.Group controlId="exampleForm.Class">
    <Form.Label>Class Level</Form.Label>
    <Form.Control as="select" 
      value ={this.state.standing} id="standing" onChange={this.handleChange}>
      <option>Freshman</option>
      <option>Sophomore</option>
      <option>Junior</option>
      <option>Senior</option>
      <option>Graduate</option>
    </Form.Control>
  </Form.Group>


  <br/>

    <Form.Label>About Me</Form.Label>
      <br/>

      <Form.Group controlId="exampleForm.aboutMe">
        <Form.Control as="textarea" rows="3" value={this.state.aboutMe} id="aboutMe" onChange={this.handleChange} placeholder="Share a little about yourself">
        </Form.Control>
      </Form.Group>

        <br/>
        <Button variant="light" onClick={this.publish}>
          Publish
          </Button>
          <br/>
        
          <br/>
          
<Alert variant="light">
        Upload a Photo
        </Alert>

          <input onChange= {this.handleImageChange} type='file' name='Choose File' accept='image/png, image/jpeg'></input>
          <br/>
          <br/>
          <Button variant="light" onClick= {this.handleUpload} type='button'>Upload</Button>
          <br/>

  </Form>
        <img src ={this.state.url}></img>
      </Container>

    );
  }

const condition = authUser => !!authUser;
export default withAuthorization(condition)(ProfilePage);