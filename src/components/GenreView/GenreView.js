import React from "react";
import GenreCarousel from "../GenreCarousel/GenreCarousel";
import LazyLoad from "react-lazyload";
function GenreView(props) {
  const renderGenreCarousels = () => {
    let render = [];
    for (let i = 0; i < props.genreCodes.length; i++) {
      render.push(
        <LazyLoad key={i}>
          <GenreCarousel type={props.type} genre={i + 1} key={i} />
        </LazyLoad>
      );
    }
    return render;
  };
  return <div className="GenreView">{renderGenreCarousels()}</div>;
}
export default GenreView;
