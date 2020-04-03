import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";
import { animeGenreCodes, mangaGenreCodes } from "../../data/GenreData";

let animeGenreItems = animeGenreCodes.map((genre, index) => {
  return (
    <LinkContainer key={index} to={`/anime-genre/genre/${genre}#`}>
      <NavDropdown.Item eventKey={`1.${index + 1}`}>{genre}</NavDropdown.Item>
    </LinkContainer>
  );
});
let mangaGenreItems = mangaGenreCodes.map((genre, index) => {
  return (
    <LinkContainer key={index} to={`/manga-genre/genre/${genre}#`}>
      <NavDropdown.Item eventKey={`1.${index + 1}`}>{genre}</NavDropdown.Item>
    </LinkContainer>
  );
});
export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navColor" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>MyAnimeClone</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/top-anime/">
            <Nav.Link>Top Anime</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/top-manga/">
            <Nav.Link>Top Manga</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Anime Genres" id="nav-dropdown">
            <LinkContainer to="/anime-genre/all">
              <NavDropdown.Item eventKey="1.0">ALL</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            {animeGenreItems}
          </NavDropdown>
          <NavDropdown title="Manga Genres" id="nav-dropdown2">
            <LinkContainer to="/manga-genre/all">
              <NavDropdown.Item eventKey="2.0">ALL</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            {mangaGenreItems}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
