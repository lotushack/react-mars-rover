import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm';
import ImageDisplay from './ImageDisplay';
import getImages from '../services';
let API_KEY = 'c5F9XcAN1eCDTjDjWT70ovEkCAKJjvH3hpqUQG1Z';
// let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${c5F9XcAN1eCDTjDjWT70ovEkCAKJjvH3hpqUQG1Z}`;

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      rover: "",
      images: []
    }
  }


  //
  // ComponentDidMount() {
  //   fetch('imageUrl').then(results => results.json()).then(responseData => {
  //     this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
  //   }).catch((error) => {
  //     console.log("Error with fetching : ", error);
  //   })
  // }



  handlechosenRover = (roverName) => {
    console.log(roverName);
    this.setState({rover: roverName.rover})
  }

handlenewUrl = (newApiUrl) => {
  getImages(newApiUrl).then((res) => {
    console.log(res);
    this.setState({images: res.data.photos})
  })
}

  render() {
    console.log(this);
    return (
      <div>
        <GetImageForm
          chosenRover={this.chosenRover}
          rover={this.state.rover}
          newUrl={this.handlenewUrl}
        />
        <h1>{this.state.rover}</h1>
        <div className="image-wrap">
          {this.state.images.map((img) => {
            return(
              <ImageDisplay
                key={img.id}
                photo={img.img_src}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
