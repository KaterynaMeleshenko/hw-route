import React from 'react';
import "./gallery.css";

const images = [
    {
      name: "image_1",
      link: "https://www.wbcsd.org/var/site/storage/images/media/page-assets/new-projects/nature-action/nature-based-solutions-guidance/154605-1-eng-GB/Nature-based-Solutions-Guidance_720_square.jpg",
    },
    {
      name: "image_2",
      link: "http://ae01.alicdn.com/kf/HTB1UOR0FER1BeNjy0Fmq6z0wVXad.jpg?width=1120&height=980&hash=2100",
    },
    {
      name: "image_3",
      link: "https://i.pinimg.com/736x/f5/02/da/f502da0b7cef0d6f7d370bcd52b9f940.jpg",
    },
    {
       name: "image_4",
       link: "https://deborahmhenson.com/wp-content/uploads/2016/04/nature-square-4.jpg", 
    },
    {
       name: "image_5",
       link: "https://i.pinimg.com/736x/c9/82/b1/c982b11fb4aaea7ed414a8cf2ada63d3.jpg", 
    },
    {
       name: "image_6",
       link: "https://media.istockphoto.com/photos/tropical-beach-and-palm-leaves-picture-id1154502502?k=6&m=1154502502&s=612x612&w=0&h=tJyC0ABysUslvcxQypYShtobK31kno6SeGmHXr3IoMk=", 
    },
    {
       name: "image_7",
       link: "https://i.natgeofe.com/k/11a219e4-a166-425b-87d7-d14958a3aa74/ww-nature-wave-arizona_square.jpg", 
    },
    {
       name: "image_8",
       link: "https://farm8.staticflickr.com/7224/7190120583_0aa51a92c6_o.jpg",
    },
    {
       name: "image_9",
       link: "https://www.traveloffpath.com/wp-content/uploads/2021/08/5-Reasons-why-Travelers-Should-Visit-the-Huasteca-Potosina-SQUARE.jpg", 
    }
]

const Picture = ({link}) => {
        return (
            <img className="gallery-image" src={link} />
        )
}

const GalleryComponent = () => {
  return (
    <div className="gallery">
      {images.map(image => <Picture {...image} key = {image.name}/>)}
    </div>
  )
}

export default GalleryComponent;