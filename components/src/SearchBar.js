import React from 'react'
import Axios from 'axios'

class Internal {
   onSubmit = async (term, callback) => {
    // /search/photos
    console.log(term)
   const resp = await Axios.get("https://api.unsplash.com/search/photos",{
      params: {
          query: term
      },
      headers: {
        Authorization: 'Client-ID e1b346a94b30b0eea5807c03b1a4b7320779bc503290f9ee5d65b2278c72225b',
      }
    });
   // let first = resp.data.results.shift();
   console.log(resp.data.results)
   return resp.data;
  }
}

export const SearchBar = () => {
  const state = {
    images: [],
    totatlResult: 0
  }
  let image = new Internal().onSubmit("car")
  image.then((res) => {
    state.images = res.results
    state.totatlResult = res.total
  })
  console.log("state ",state)
  return <div>
  <br />
    <div className="ui fluid action input">
      <input type="text" placeholder="Search..." />
      <div className="ui button">Search</div>
      found: {state.totatlResult} images
    </div>
  </div>
}