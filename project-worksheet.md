# Project Overview

## Project Links

- [Github - Final](https://github.com/techienaut/project_2_react)
- [Github - Prev Commits](https://github.com/techienaut/prevCommits-my_anime_list_clone)
- [Netlify - deployment link](https://elated-hermann-2df736.netlify.com/)

## Project Description

This project will be a clone of **MyAnimeList**, with some curated design on the front-end.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 


```javascript
fetch(https://api.jikan.moe/v3/search/anime?q=Naruto&limit=16)
	.then(res => res.json())
	.then(data => console.log(data))
//
{
  "request_hash": "request:search:628b06fe5b4699e5d53d1af61571e8eadf1132d0",
  "request_cached": true,
  "request_cache_expiry": 216741,
  "results": [
    {
      "mal_id": 20,
      "url": "https://myanimelist.net/anime/20/Naruto",
      "image_url": "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
      "title": "Naruto",
      "airing": false,
      "synopsis": "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
      "type": "TV",
      "episodes": 220,
      "score": 7.88,
      "start_date": "2002-10-03T00:00:00+00:00",
      "end_date": "2007-02-08T00:00:00+00:00",
      "members": 1332420,
      "rated": "PG-13"
    },
    {
      "mal_id": 1735,
      "url": "https://myanimelist.net/anime/1735/Naruto__Shippuuden",
      "image_url": "https://cdn.myanimelist.net/images/anime/5/17407.jpg?s=2bf24a22a339223dcadb1cdfc3307b61",
      "title": "Naruto: Shippuuden",
      "airing": false,
      "synopsis": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the myster...",
      "type": "TV",
      "episodes": 500,
      "score": 8.15,
      "start_date": "2007-02-15T00:00:00+00:00",
      "end_date": "2017-03-23T00:00:00+00:00",
      "members": 1104827,
      "rated": "PG-13"
    }
  ]
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- Wireframe
  - https://res.cloudinary.com/techienaut/image/upload/v1585274134/Multiple_Anime_c0piq2.png
  - https://res.cloudinary.com/techienaut/image/upload/v1585274132/Single_Anime_fniau1.png
  - https://res.cloudinary.com/techienaut/image/upload/v1585275333/Anime_List_yg11fn.png
- [React Architecture](https://www.figma.com/file/ZIfCRBp7Wlqqd3yTb2kxon/MyAnimeList?node-id=16%3A2)
  - Under "Components"


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Nav bar with links to routes within the app.
- Main: Containers routes to rendering different components
- GenreView: Main View of Genre Carousels
- GenreCarousel: Single Carousels for specific Anime/Manga category

#### PostMVP EXAMPLE

- GridView of Top-Anime/Manga, and Anime/Manga genres.
- SingleView of a single Anime/Manga with details about said Anime/Manga.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description |
| --- | :---: |
| App | Base Components |
| Header        | Navbar |
| Main        | Main Page Render |
| GenreView | Main View of Genre Carousels |
| GenreCarousel | Single Carousels for specific Anime/Manga category |
| GridShow | A Bootstrap Grid Container of Top-Anime/Manga and Individual Genres |
| SingleShow    | Descr of a single Anime/Manga |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

## Time Matrix

- [Time Matrix](https://res.cloudinary.com/techienaut/image/upload/v1585277003/Time_Matrix_s5vt5s.png)

## Time Frame

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Nav/Header   | H | 3 hr | 4 hr | 4 hr |
| GenreCarousel | H | 4 hr | 7 hr | 7 hr |
| GenreView     | H | 3 hr | 6 hr | 6 hr |
| GridShow      | H | 3 hr | 7 hr | 7 hr |
| Main | H | 3 hr | 3 hr | 3 hr |
| SingleShow | H | 3 hr | 5 hr | 5 hr |
| Total        |  | 19 hr | 32 hr | 32 hr |

## Additional Libraries
- [@brainhubeu/react-carousel](https://brainhubeu.github.io/react-carousel/docs/gettingStarted)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [lodash.throttle](https://www.npmjs.com/package/lodash.throttle)
- [react-lazyload](https://github.com/twobin/react-lazyload)
- [react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)

## Code I attributed

- [useBreakpoint Hook — Get Media Query Breakpoints in React](https://medium.com/better-programming/usebreakpoint-hook-get-media-query-breakpoints-in-react-3f1779b73568)
  - used in **/helpers/useSlidesPerScroll**

## Code Snippet

I have somewhat of a understanding of the code below. Basically, it sets breakpoints on the screen for media responsiveness. The function exported is also a **custom react hook**. brkPnt is set to whatever value is given for the current width. In this case, the value represents how many items the GenreCarousel will display given the width of the screen. useEffect is used whenever the "resize" event listened is called. 

```javascript
const useSlidesPerScroll = () => {
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(function() {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};
```

