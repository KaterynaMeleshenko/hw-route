import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import PostsComponent from './components/PostsComponent';
import GalleryComponent from './components/GalleryComponent';
import ContactsComponent from './components/ContactsComponent';




function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/" className="menulink" activeClassName={'selected'}>Home</NavLink>
        <NavLink to="/posts" className="menulink" activeClassName={'selected'}>Posts</NavLink>
        <NavLink to="/gallery" className="menulink" activeClassName={'selected'}>Gallery</NavLink>
        <NavLink to="/contacts" className="menulink" activeClassName={'selected'}>Contacts</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/posts" component={PostsComponent} />
        <Route path="/gallery" component={GalleryComponent} />
        <Route path="/contacts" component={ContactsComponent} /> 
      </Switch>
    </div>
  );
}

export default App;
