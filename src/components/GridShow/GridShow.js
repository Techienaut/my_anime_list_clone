import React, { useState, useEffect } from "react";
import { animeGenreCodes, mangaGenreCodes } from "../../data//GenreData";
import { Container, Row, Col } from "react-bootstrap";
import {
  Route,
  Redirect,
  Link,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
function GridShow(props) {
  const [actionData, setActionData] = useState("");
  useEffect(() => {
    const makeApiCall = async () => {
      let tempActionData = [];
      for (let i = 1; i <= 3; i++) {
        let url = "";
        if (props.genre === "top") {
          url = `https://api.jikan.moe/v3/top/${props.type}/${i}`;
        } else {
          if (props.type === "anime") {
            url = `https://api.jikan.moe/v3/search/${props.type}?genre=${1 +
              animeGenreCodes.indexOf(
                props.match.params.genre
              )}&page=${i}&order_by=score`;
          }
          if (props.type === "manga") {
            url = `https://api.jikan.moe/v3/search/${props.type}?genre=${1 +
              mangaGenreCodes.indexOf(
                props.match.params.genre
              )}&page=${i}&order_by=score`;
          }
        }
        console.log("url:", url);
        let res = await fetch(url);
        let json = await res.json();
        console.log("json:", json);
        if (props.genre === "top") {
          if (json.top) {
            tempActionData = tempActionData.concat(json.top);
          }
        } else {
          if (json.results) {
            console.log("anime:", json.results);
            tempActionData = tempActionData.concat(json.results);
          }
        }
      }
      console.log("tempaction: ", tempActionData);
      setActionData(tempActionData);
    };
    makeApiCall();
  }, []);
  const header = () => {
    if (props.genre === "top" && props.type === "anime") {
      return <h1>Top Anime</h1>;
    } else if (props.genre === "top" && props.type == "manga") {
      return <h1>Top Manga</h1>;
    } else {
      return <h1>{props.match.params.genre}</h1>;
    }
  };
  const grid = () => {
    let render = actionData.map((show, index) => {
      return (
        <Col xs={6} sm={4} lg={2}>
          <div style={{ minHeight: "110px", position: "relative" }}>
            <Link
              to={`/${props.type}/id/${show.mal_id}`}
              style={{ color: "white" }}
            >
              <p
                style={{
                  position: "absolute",
                  bottom: 0,
                  fontSize: "16px",
                  lineHeight: 1.2,
                  marginBottom: "6px",
                  textAlign: "center"
                }}
              >
                {index + 1 + ". " + show.title}
              </p>
            </Link>
          </div>

          <Link
            to={`/${props.type}/id/${show.mal_id}`}
            style={{ color: "white" }}
          >
            <img style={{ height: "140px" }} src={show.image_url} alt="" />
          </Link>
        </Col>
      );
    });
    return render;
  };
  return (
    <Container>
      {header()}
      <div style={{ width: "90%", margin: "0 auto" }}>
        <Row>{actionData ? grid() : ""}</Row>
      </div>
    </Container>
  );
}

export default GridShow;
