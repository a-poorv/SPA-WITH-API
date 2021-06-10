import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Redirect
} from "react-router-dom";
import Login from "./layout/Login";
import Home from "./layout/Home";
import AboutMe from "./layout/AboutMe";
import index from "./index.css"; 
import ContactMe from"./layout/ContactMe";
function Main() {

    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>

          <ul className="header">
          <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink to="/Home">HOME</NavLink></li>
            <li><NavLink to ="/stuff">ABOUT ME </NavLink> </li>
            <li><NavLink to="/contact">CONTACT ME</NavLink></li>
            <li><a href=" /login#/login">Logout</a></li>
          </ul>         
          <div className="content">
            <Route exact path="/login" component={Login}/>
          <Route exact path="/Home" component={()=><Home authorized={true}/>}/>
          <Route  exact  path="/stuff" component={AboutMe}/> 
          <Route  exact path="/contact" component={ContactMe}/> 
          </div>
        </div>
        </HashRouter>
    );
  }

 
export default Main;