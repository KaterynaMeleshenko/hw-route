import React from 'react';
import './home.css';

const image = 'https://i2.wp.com/www.quotespedia.org/ywhypsaw/2019/11/12112019001.jpg?fit=1920%2C1200&ssl=1';

const HomeComponent = () => {
    return (
        <div className="home-main">
            <h1 className="home-header">Always Dream Big</h1>
            <h2 className="home-slogan">No pain - no gain</h2>
            <img className="home-image" src={image} />
        </div>
    )
  }

  export default HomeComponent;