import React, {Component} from 'react';
import GetImageButton from './GetImageButton';
// import ImageDisplay from './ImageDisplay';
const API_KEY = "c5F9XcAN1eCDTjDjWT70ovEkCAKJjvH3hpqUQG1Z";

export default class GetImageForm extends Component {
  constructor() {
    super();

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "1200"
    };
  }
  handleRover = (evt) => {
    // console.log(evt.target.value);
    this.setState({rover: evt.target.value})
  }

  handleCamera = (evt) => {
    console.log(evt.target.value);
    this.setState({camera: evt.target.value})
  }

  handleSol = (evt) => {
    this.setState({sol: evt.target.value})
  }

  fetchRoverImage = (evt) => {
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;
    console.log(this.state);
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    this.props.newUrl(imageUrl)
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        </form>
        <GetImageButton onClick={this.fetchRoverImage}/>
      </div>
    )
  }
}
