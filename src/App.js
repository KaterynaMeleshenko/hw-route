import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, NavLink, Redirect, useParams } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import PostsComponent from './components/PostsComponent';
import GalleryComponent from './components/GalleryComponent';
import ContactsComponent from './components/ContactsComponent';
import { contacts }  from './components/ContactsComponent';
import { iconMale, iconFemale, iconUndefined} from './components/Contact';

function Person() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("+************");
  const [description, setDescription] = useState("");
  const { link } = useParams();

  useEffect(() => {
    const newPerson = contacts.find((person) => person.lastName === link);
    setFirstName(newPerson.firstName);
    setLastName(newPerson.lastName);
    setGender(newPerson.gender);
    setPhone(newPerson.phone);
    setDescription(newPerson.description);
  });

  return (
    <>
      <div className="info-container">
          <div className="contactinfo">
            <div className="info-mainInfo"> 
              <div className="info-firstName"><span className="info-title">Name:</span> {firstname} </div>
              <div className="info-lastName"><span className="info-title">Surname:</span> {lastname} </div>
              <div className="info-gender"> <span className="info-title">Gender:</span> {gender === "male" ? iconMale : gender === "female" ? iconFemale : iconUndefined}</div>
              <div className="info-phone"><span className="info-title">Phone:</span> {phone} </div>
              <div className="info-description"><span className="info-title">Description:</span> {description} </div>
            </div>
          </div>
        </div>
    </>
  );
}


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/" className="menulink" exact activeClassName={'selected'}>Home</NavLink>
        <NavLink to="/posts" className="menulink" activeClassName={'selected'}>Posts</NavLink>
        <NavLink to="/gallery" className="menulink" activeClassName={'selected'}>Gallery</NavLink>
        <NavLink to="/contacts" className="menulink" activeClassName={'selected'}>Contacts</NavLink>
      </nav>
      <Switch>
        <Route exact path="/hw-route" >
          <Redirect to="/" />
        </Route>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/posts" component={PostsComponent} />
        <Route path="/gallery" component={GalleryComponent} />
        <Route exact path="/contacts/:link" children={<Person/>} />
        <Route path="/contacts" component={ContactsComponent} />
      </Switch>
    </div>
  );
}

export default App;
