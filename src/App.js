import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';
const particlesOptions ={
  particles: {
    size: {
      value: 3,
      random: true,
        anim:{
          enable:true,
          speed: 20,
          size_min: 0.1,
          sync: false

      }
    },
    number: {
      value: 100,
      density:{
        enable: true,
        value_area: 800
        }  
      }
    }
  }
  const app = new Clarifai.App({
    apiKey: '4405c014c657468cbaa10c6a66e89aee'
  })

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl: '',
      box: {},
      demographics:{}
    }
  }
  getDmgInfo = (data) => {
    const clarifaiDmg = data.outputs[0].data.regions[0].data.face;
    const ageData = clarifaiDmg.age_appearance.concepts[0];
    const genderData = clarifaiDmg.gender_appearance.concepts;
    const culturalData = clarifaiDmg.multicultural_appearance.concepts;
    return{
      age: ageData.name,
      ageP: ageData.value,
      gender0: genderData[0].name,
      gender0P: genderData[0].value,
      gender1: genderData[1].name,
      gender1P: genderData[1].value,
      mc0: culturalData[0].name,
      mc0P: culturalData[0].value,
      mc1: culturalData[1].name,
      mc1P: culturalData[1].value,
      mc2: culturalData[2].name,
      mc2P: culturalData[2].value,
      mc3: culturalData[3].name,
      mc3P: culturalData[3].value,
      mc4: culturalData[4].name,
      mc4P: culturalData[4].value,
      mc5: culturalData[5].name,
      mc5P: culturalData[5].value,
      mc6: culturalData[6].name,
      mc6P: culturalData[6].value,
    }
  }
  setDmgInfo = (data) =>{
    this.setState({demographics:data})
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const inputImg = document.getElementById('inputImage');
    const width = Number(inputImg.width);
    const height = Number(inputImg.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      botRow: height - (clarifaiFace.bottom_row * height)
      }
    }
  drawFaceDetection = (box) => {
    this.setState({box:box});    
  }
  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  onSubmit = () =>{
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input).then(
      response => {
        console.log(response);
        this.drawFaceDetection(this.calculateFaceLocation(response));
        this.setDmgInfo(this.getDmgInfo(response));
      })
      .catch(err => console.log(err));   
  }
  render() {
    return (
      <div className="App">
        <Particles className ='particles' params={particlesOptions}/>
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition dmgInfo={this.state.demographics} box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
