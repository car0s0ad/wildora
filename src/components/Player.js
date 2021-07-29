import React from "react";
import { useState } from "react";

import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import { useDataLayerValue } from "../data/DataLayer";

import "../styles/Player.css";
import Body from "./Body";
import Footer from "./Footer";
import Search from "./Search";
// import Search from "./Search";
import ApiManager from "../LocalApi/ApiManager"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import Header from "./Header";
import Avatar1 from "./Avatar"


function Player({ spotify }) {
    const [{ playlists }] = useDataLayerValue();  //from sidebar.js
  
  return (
    <Router>
      
    <div className="player">
      <div className="player__body">
        
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://www.pngkey.com/png/full/190-1907978_spotify-logo-png-white-spotify-logo-white-transparent.png"
        alt="Spotify logo"
      />
      <nav>
      <Link to="/#" exact path></Link>
      <Link to="/Inicio"><SidebarOption title="Inicio" Icon={HomeIcon} /></Link>
      <Link to="/Buscar"><SidebarOption title="Buscar" Icon={SearchIcon} /></Link>
      <Link to="/Listas"><SidebarOption title="Listas" Icon={AudiotrackIcon}/></Link>
      <Link to="/UsarApi"><SidebarOption title="Consumir API" Icon={AudiotrackIcon}/></Link>
      <br></br>
      </nav>
      <strong className="sidebar__title">YOUR PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        return <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id}/>
      })}
    </div>
    
<article className="body">

    <Switch>
      <Route path="/#" exact path>
      <h1>Hola, acá puede ir un bienvenidos pero más lindo C:</h1>
      </Route>

      <Route path="/Inicio">
      <Avatar1/>
      </Route>

      <Route path="/Buscar">
        <Header/>
        <Search /> 
      </Route>

      <Route path="/Listas">
        <Body />
      </Route>
        
      <Route path="/UsarApi">
        <Avatar1/>
        <ApiManager/>
      </Route>
    </Switch>

    </article>


      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default Player