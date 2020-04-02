import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function SingleShow(props) {
  const [actionData, setActionData] = useState("");
  useEffect(() => {
    const makeApiCall = async () => {
      const url = `https://api.jikan.moe/v3/${props.type}/${props.match.params.id}`;
      console.log("url:", url);
      const res = await fetch(url);
      const json = await res.json();
      console.log("json-anime:", json);
      setActionData(json);
    };
    makeApiCall();
  }, []);
  return (
    <div className="SingleShow">
      <h1>{actionData.title}</h1>
      <img src={actionData.image_url} alt="None" />
      <Container style={{ margin: "16px auto", textAlign: "center" }}>
        <Row>
          <Col md={4}>
            <h3>Rank</h3>
            <h4>{`#${actionData.rank}`}</h4>
          </Col>
          <Col md={4}>
            <h3>Popularity</h3>
            <h4>{`#${actionData.popularity}`}</h4>
          </Col>
          <Col md={4}>
            <h3>Members</h3>
            <h4>{`#${actionData.members}`}</h4>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          width: "60%",
          margin: "32px auto 16px auto",
          textAlign: "left"
        }}
      >
        <h2>Synopsis:</h2>
        <p style={{ fontSize: "18px" }}>{actionData.synopsis}</p>
      </Container>
    </div>
  );
}

export default SingleShow;
