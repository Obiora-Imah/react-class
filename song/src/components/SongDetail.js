import React, { Component } from "react";
import { connect }  from "react-redux";


const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

const SongDetail =({song}) => {
  if(!song){
    return <div>Select a song</div>
  }
  return(
    <div>
      <div>
        <h2> Detail For: </h2>
        <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
        </p>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(SongDetail);

