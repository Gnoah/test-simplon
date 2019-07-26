import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import './components.css'

export default class ItemModal extends Component {
  constructor(props){
    super(props);
    this.state = {
        nom: '',
        prenom:'',
        email: '',
        telephone: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleInscrire = this.handleInscrire.bind(this);
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
};

onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
  handleInscrire(ev) {
  ev.preventDefault();

  const data = new FormData();
    data.append('nom', this.state.nom);
    data.append('prenom',this.state.prenom);
    data.append('email',this.state.email);
    data.append('telephone',this.state.telephone);
console.log(this.props);


  axios.post("https://simplontest04.herokuapp.com/particulier/" + this.props.id)
  .then(res=>{
    axios.get('https://simplontest04.herokuapp.com/cuisinier/'+ localStorage.getItem('id')).then(res=>{
      console.log(res.data)
      this.setState({atelier:res.data})
  })
  console.log(res.data);
  })

    this.toggle();
  }

  componentDidMount() { 
    axios.get('https://simplontest04.herokuapp.com/cuisinier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })
  }
  

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.toggle}  id="edit" className="btn edit" >Inscrire</Button>        
        </div>
         
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Inscrire sur Atelier</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleInscrire}>
              <FormGroup>
                <Label for="item">Inscrire sur Atelier</Label>
                <Input type="text" name="nom" ref={(input) => this.getTitre = input}
                  validate success="right" value={this.state.value} placeholder="Nom"/>
                <Input type="text" name="prenom" ref={(input) => this.getDescription = input}
                 validate success="right" value={this.state.value} placeholder="Prenom"/>
                <Input type="email" name="email" id="item"  placeholder="Email" validate
                     success="right" value={this.state.value} onChange={this.onChange}/>
                <Input type="number" name="telephone" id="item"  validate
                     success="right" value={this.state.value} placeholder="Telephone" onChange={this.onChange}/>
                <Button color="blue" style={{ marginTop: '2rem' }} block>
                  Inscrire
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
