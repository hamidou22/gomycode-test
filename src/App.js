import React, { Component } from "react";
import ContactCard from "./components/ContactCard";
import Posts from './components/Posts';
import Comments from './components/Comments';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import {  Switch, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    list: [],
  
  };

  componentDidMount = () => {
    this.getUser();
  };

  getUser = () =>
   { axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ list: res.data }))};

     

  render() {
    return (
      <div className="App">
      {/* <Link to="/card">
        <button className="button">Contact List</button>
      </Link> */}
          <Switch>
          <Route
            path="/card"
            render={() => (
              <div className="contact-list">
        {this.state.list.map(el => (
                    <ContactCard  contact={el} />
                  ))}
              </div>
            )}
          />
               <Route
            path="/Posts/:id"
           component={Posts}
          />
               <Route
            path="/comments/:id"
          render={(props)=>(<Comments id={props.match.params.id}/>)}/>
          
  </Switch>
      
      </div>
    );
  }
}
 