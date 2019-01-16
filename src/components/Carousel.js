import React, { Component } from "react";
import { render } from 'react-dom';
import axios from "axios";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
const constants = require("../config/constants");

class Carousel extends Component {


    render() {
        
        let photoOne = `${constants.server}/files/sliderPics/slider1.jpg`
        let photoTwo = `${constants.server}/files/sliderPics/slider2.jpg`
        let photoThree = `${constants.server}/files/sliderPics/slider3.jpg`
        let photoFour = `${constants.server}/files/sliderPics/slider4.jpg`
        let photoFive = `${constants.server}/files/sliderPics/slider5.jpg`
        let photoSix = `${constants.server}/files/sliderPics/slider6.jpg`
        let photoSeven = `${constants.server}/files/sliderPics/slider7.jpg`
        let photoEight = `${constants.server}/files/sliderPics/slider8.jpg`
        let photoNine = `${constants.server}/files/sliderPics/slider9.jpg`
        let photoTen = `${constants.server}/files/sliderPics/slider10.jpg`

        let proOne = `${constants.server}/files/sliderPics/sliderPro1.jpg`
        let proTwo = `${constants.server}/files/sliderPics/sliderPro1.jpg`
        let proThree = `${constants.server}/files/sliderPics/sliderPro1.jpg`
        let proFour = `${constants.server}/files/sliderPics/sliderPro1.jpg`
        let proFive = `${constants.server}/files/sliderPics/sliderPro1.jpg`
        let proSix = `${constants.server}/files/sliderPics/sliderPro1.jpg`
        let proSeven = `${constants.server}/files/sliderPics/sliderPro1.jpg`
        let proEight = `${constants.server}/files/sliderPics/sliderPro1.jpg`
        let proNine = `${constants.server}/files/sliderPics/sliderPro1.jpg`
        let proTen = `${constants.server}/files/sliderPics/sliderPro1.jpg`

        const content = [
            {
                title: 'San Francisco',
                description:
                'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo.',
                button: 'Read More',
                // image: 'https://i.imgur.com/ZXBtVw7.jpg',
                image: `${photoOne}`,
                user: 'Bob Smith',
		        userProfile: `${proOne}`            
            },
            {
                title: 'Big City',
                description:
                'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
                button: 'Discover',
                image: `${photoTwo}`,
                user: 'Bob Smith',
		        userProfile: `${proTwo}`
            },    
            {
                title: 'New York',
                description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
                button: 'Explore',
                image: `${photoThree}`,
                user: 'Bob Smith',
		        userProfile: `${proOne}`
            },
            {
                title: 'Chicago',
                description:
                'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
                button: 'Discover',
                image: `${photoFour}`,
                user: 'Bob Smith',
		        userProfile: `${proOne}`
            },
            {
                title: 'Los Angeles',
                description:
                'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
                button: 'Read More',
                image: `${photoFive}`,
                user: 'Bob Smith',
		        userProfile: `${proOne}`
            },
            {
                title: 'Malibu',
                description:
                'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus .',
                button: 'Escape',
                image: `${photoSix}`,
                user: 'Bob Smith',
		        userProfile: `${proOne}`
            },
            {
                title: 'Hollywood',
                description:
                'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
                button: 'Discover',
                image: `${photoSeven}`,
                user: 'Bob Smith',
		        userProfile: `${proOne}`
            },
            {
                title: 'San Diego',
                description:
                'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
                button: 'Explore',
                image: `${photoEight}`,
                user: 'Bob Smith',
		        userProfile: `${proOne}`
            },
            {
                title: 'Portland',
                description:
                'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac.',
                button: 'Read More',
                image: `${photoNine}`,
                user: 'Bob Smith',
		        userProfile: `${proOne}`
            },
            {
                title: 'Portland',
                description:
                'Nullam id dolor id nibh ultricies vehicula ut id elit. ',
                button: 'Find Out More',
                image: `${photoTen}`,
                user: 'Bob Smith',
		        userProfile: `${proOne}`
            }
            
        ];



        return (
        <div className="slider">
        <Slider className="slider-wrapper" 
                onSlideChange={event => console.log(event.slideIndex)}
                autoplay={4000}
                duration={4000}
                minSwipeOffset={15}
                >
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }
                    }
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button className="sliderButton">{item.button}</button>
					</div>
					<section className="sliderUserPost">
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
        </div>
        );
    }
}

export default Carousel;











































// import React, { Component } from "react";
// const constants = require("../config/constants");

// class Carousel extends Component {
//     constructor(props) {
//         super(props)
//         this.state ={
//         photos: [],
//         active: 0
//     }
// }




    // static getDerivedStateFromProps({ media }){
    //     let photos = [];

    //     if (media && media.photos && media.photos.photo) {
    //         photos = media.photos.photo.filter(photo => photo['@size'] === "pn");
    //     }
    //     // above pn is the size of the photo from the api
    //     // need to put phots into an array
    //     return { photos }
    // }
    // handleIndexClick = event => {
    //     this.setState({
    //         active: +event.target.dataset.index
    //     })
    // }
    // render() {
    //     let url = `${constants.server}/files/sliderPics/`
    //     let photoOne = `${constants.server}/files/sliderPics/slider1.jpg`
    //     let photoTwo = `${constants.server}/files/sliderPics/slider2.jpg`
    //     let photoThree = `${constants.server}/files/sliderPics/slider3.jpg`
    //     let photoFour = `${constants.server}/files/sliderPics/slider4.jpg`
        // let photos = [{ photoOne}, {photoTwo}, {photoThree}, {photoFour}]
        // const { photos, active } = this.state

        // return(
        //     <div className="carousel">
        //         <img src={photoOne} height="404" width="507" />
        //         <img src={photoTwo} height="365" width="547" />
        //         <img src={photoThree} height="362" width="583" />
        //         <img src={photoFour} height="345" width="518" />
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
            {/* </div>
        )
    }
} */}

{/* <img src={`${constants.server}/${this.state.userObject.user.profilePic}`} alt={this.state.userObject.user.username} className='user-image' /> */}

// export default Carousel;

