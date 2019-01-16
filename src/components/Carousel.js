import React, { Component } from "react";
const constants = require("../config/constants");

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state ={
        photos: [],
        active: 0
    }
}




    // static getDerivedStateFromProps({ media }){
    //     let photos = [];

    //     if (media && media.photos && media.photos.photo) {
    //         photos = media.photos.photo.filter(photo => photo['@size'] === "pn");
    //     }
    //     // above pn is the size of the photo from the api
    //     // need to put phots into an array
    //     return { photos }
    // }
    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index
        })
    }
    render() {
        let url = `${constants.server}/uploads/profilePics/`
        let photoOne = `${constants.server}/uploads/profilePics/slider1.jpg`
        let photoTwo = `${constants.server}/uploads/profilePics/slider2.jpg`
        let photoThree = `${constants.server}/uploads/profilePics/slider3.jpg`
        let photoFour = `${constants.server}/uploads/profilePics/slider4.jpg`
        // let photos = [{ photoOne}, {photoTwo}, {photoThree}, {photoFour}]
        // const { photos, active } = this.state

        return(
            <div className="carousel">
                <img src={photoOne} height="304" width="407" />
                <img src={photoTwo} height="365" width="547" />
                <img src={photoThree} height="362" width="583" />
                <img src={photoFour} height="345" width="518" />
                {/* <img src={photos[active].value} /> */}
                {/* <div className="carousel-smaller">
                </div>
                    {photos.map((photo, index) =>(
                        <img 
                        onClick={this.handleIndexClick}
                        key={photo.value}
                        data-index={index}
                        src={photo.value} 
                        // className={index === active ? "active" : ""}
                        alt="city thumbnail"
                        />
                    ))} */}
            </div>
        )
    }
}

{/* <img src={`${constants.server}/${this.state.userObject.user.profilePic}`} alt={this.state.userObject.user.username} className='user-image' /> */}

export default Carousel;

// import React from "react";

// class Carousel extends React.Component {
//   state = {
//     photos: [],
//     active: 0
//   };
//   static getDerivedStateFromProps({ media }) {
//     let photos = [];
//     if (media && media.photos && media.photos.photo) {
//       photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
//     }

//     return { photos };
//   }
//   render() {
//     const { photos, active } = this.state;
//     return (
//       <div className="carousel">
//         <img src={photos[active].value} alt="animal" />
//         <div className="carousel-smaller">
//           {photos.map((photo, index) => (
//             <img
//               key={photo.value}
//               src={photo.value}
//               className={index === active ? "active" : ""}
//               alt="animal thumbnail"
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Carousel;