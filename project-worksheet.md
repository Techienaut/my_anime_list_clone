# Project Overview

## Project Links

- [github- Project 2 React](https://github.com/techienaut/project_2_react)
- [add your deployment link]()

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
- [React Architecture(https://docs.google.com/drawings/d/17CviwfviCZFcbRvFpRmC1bYE9Cw_mwe4GtUTx-CgAAw/edit?usp=sharing)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Fetch Jiken API
- Navbar with Categories pop-over.
- Carousel of categories.
- Scrollable list for one category.
- Single Anime:
  - Description
  - Reviews

#### PostMVP EXAMPLE

- Filter anime based on most viewed, or highest rated.
- More reviews page on anime/manga.
- Search
- Favorites

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description |
| --- | :---: |
| App | This will make the initial data pull and include React Router|
| Nav | Navbar |
| Main        | Main Page Render |
| CatCarousel | Carousel for specific Anime/Manga category |
| TitleImg    | Single Anime Image and title |
| Descr       | Descr of Anime/Manga |
| Reviews     | Average Reviews and List of Reviews |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

## Time Matrix

- [Time Matrix](https://res.cloudinary.com/techienaut/image/upload/v1585277003/Time_Matrix_s5vt5s.png)

## Time Frame

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Nav          | H | 3 hr |  |  |
| CatCarousel  | H | 4 hr |               |  |
| TitleImg     | H | 3 hr |               |  |
| Descr        | H | 3 hr |               |  |
| Reviews      | H | 4 hr |               |  |
| Responsiveness | H | 7 hr | | |
| Total        |  | 24 hr |               |  |
| Post-MVP     |  |  |               |  |
| Search | M | 3 hr | | |
| Favorites | M | 4 hr | | |
| Reviews Page | L | 3 hr |               |  |
| Filters      | L | 4 hr |               |  |
| Total        |  | 38 hr |               |  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
