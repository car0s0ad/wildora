import React from "react";

import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import { useDataLayerValue } from "../data/DataLayer";

import "../styles/Player.css";
import Body from "./Body";
import Footer from "./Footer";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"


function Player({ spotify }) {
  const [{ playlists }] = useDataLayerValue();  //from sidebar.js

  return (
    <Router>
    <div className="player">
      <div className="player__body">
        
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <nav>
      <Link to="/Inicio"><SidebarOption title="Inicio" Icon={HomeIcon} /></Link>
      <Link to="/Buscar"><SidebarOption title="Buscar" Icon={SearchIcon} /></Link>
      <Link to="/Listas"><SidebarOption title="Listas" Icon={AudiotrackIcon}/></Link>
      </nav>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        return <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id}/>
      })}
    </div>

    <header>Hola pre inicio feo</header>

<article className="body">

    <Switch>
      <Route path="/Inicio">
        <h2>Aca es el inicio y hubo una imagen deforme</h2>
      </Route>

      <Route path="/Buscar">
        <h2>Aca es para buscar jiji</h2>
      </Route>

      <Route path="/Listas">
        <Body />
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