import React from "react";
import { BiMaleSign } from "react-icons/bi";
import { BiFemaleSign } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { ImArrowLeft } from "react-icons/im";
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const iconMale = <BiMaleSign/>;
const iconFemale = <BiFemaleSign/>;
const iconUndefined = <BiQuestionMark />

const Contact = ({firstName, lastName, phone, gender, description, id}) => {
    const match = useRouteMatch();
  return (
  <div className="contact-block">    
  <Link to={match.url+"/"+lastName} className="contactlink">
    <div className="container-contact">
      <div className="contact">
        <div className="mainInfo"> 
          <span className="firstName">{firstName} </span>
          <span className="lastName">{lastName} </span>
          <span className="gender">  {gender === "male" ? iconMale : gender === "female" ? iconFemale : iconUndefined}</span>
        </div>
        <div className="phone"> {phone} </div>
        </div>
        <div className="call"><BiPhone/></div>
    </div>
  </Link>
    <Switch>
      <Route path={match.url+"/"+lastName}>
        <div className="info-container">
          <div className="contactinfo">
            <div className="info-mainInfo"> 
              <div className="info-firstName"><span className="info-title">Name:</span> {firstName} </div>
              <div className="info-lastName"><span className="info-title">Surname:</span> {lastName} </div>
              <div className="info-gender"> <span className="info-title">Gender:</span> {gender === "male" ? iconMale : gender === "female" ? iconFemale : iconUndefined}</div>
              <div className="info-phone"><span className="info-title">Phone:</span> {phone} </div>
              <div className="info-description"><span className="info-title">Surname:</span> {description} </div>
              <div className="info-arrow"><span className="info-arrow"><ImArrowLeft/></span></div>
            </div>
          </div>
        </div>
      </Route>  
    </Switch>
  </div>
  )
}

export default Contact;