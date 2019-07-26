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

export default class ItemModal extends Component {
  constructor(props){
    super(props);
    this.state = {
        titre: '',
        description:'',
        date: '',
        horaire: '',
        duree: '',
        placedispo:'',
        placereserve: '',
        prix: '',
        image: '',
    }
    this.onChange = this.onChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this);
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
  handleEdit(ev) {
  ev.preventDefault();

  const data = new FormData();
    data.append('image', this.uploadInput.files[0]);
    data.append('titre',this.state.titre);
    data.append('description',this.state.description);
    data.append('date',this.state.date);
    data.append('horaire',this.state.horaire);
    data.append('duree',this.state.duree);
    data.append('placedispo',this.state.placedispo);
    data.append('placereserve',this.state.placereserve);
    data.append('prix',this.state.prix);
console.log(this.props);

// axios.put('http://localhost:8080/atelieraffichier/'+ this.props._id).then(res=>{
//   console.log(res.data)
//   this.setState({atelier:res.data})
// })

  fetch('https://simplontest04.herokuapp.com/atelieraffichier/'+ this.props.id, {
    method: 'PUT',
    body: data,
  }).then((response) => {
      
    response.json().then((body) => {
      axios.get('https://simplontest04.herokuapp.com/cuisinier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })
      this.setState({ image: `https://simplontest04.herokuapp.com/atelieraffichier/${body.image}` });
      console.log('image :', body.image);

    });
  });

  this.toggle();
}

  

  render() {
    return (
      <div>
          <Button onClick={this.toggle} id="boutton" className="btn edit" ><i className="fas fa-pen"></i></Button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Atelier</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleEdit}>
              <FormGroup>
                <Label for="item">Atelier</Label>
                <Input type="text" name="titre" ref={(input) => this.getTitre = input}
                  validate success="right" value={this.state.value} placeholder="Enter titre" onChange={this.onChange}/>
                <Input type="text" name="description" ref={(input) => this.getDescription = input}
                 validate success="right" value={this.state.value}placeholder="Enter Description" onChange={this.onChange}/>
                <Input type="date" name="date" id="item"  placeholder="Ajouter date" validate
                     success="right" value={this.state.value} onChange={this.onChange}/>
                <Input type="time" name="horaire" id="item"  validate
                     success="right" value={this.state.value} placeholder="Horaire" onChange={this.onChange}/>
                <Input type="heure" name="duree" id="item" validate
                     success="right" value={this.state.value} placeholder="Durée" onChange={this.onChange}/>
                <Input type="number" name="nombreplace" id="item" validate
                     success="right" value={this.state.value} placeholder="Nombre de place" onChange={this.onChange}/>
                <Input type="number" name="placereserve" id="item" validate
                     success="right" value={this.state.value} placeholder="nombre de place reserver" onChange={this.onChange}/>
                <Input type="number" name="prix" id="item"  placeholder="Add prix" onChange={this.onChange}/>
                <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" required />
                <Button color="blue" style={{ marginTop: '2rem' }} block>
                  Update
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
