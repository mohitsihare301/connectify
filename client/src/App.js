import React from "react";
import { Container } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from "./components/Navbar/Navbar";
import PostDetails from './components/PostDetails/PostDetails';
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import CreatorOrTag from "./components/CreatorOrTag/CreatorOrTag";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <GoogleOAuthProvider clientId="8537025446-6as2974fc9lsa96gcu2rts04pjvlasva.apps.googleusercontent.com">
    <Router>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/posts" />} />
          <Route exact path="/posts" element={<Home />} />
          <Route exact path="/posts/search" element={<Home />} />
          <Route exact path="/posts/:id" element={<PostDetails/>} />
          <Route exact path="/creators/:name" element={<CreatorOrTag/>}/>
          
          <Route exact path="/tags/:name" element={<CreatorOrTag/>}/>
          <Route exact path="/auth" element={!user ? <Auth /> : <Navigate replace to="/posts" />} />
        </Routes>
      </Container>
    </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
