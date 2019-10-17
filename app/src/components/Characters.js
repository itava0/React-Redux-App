import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacter } from "../actions";
import CharacterLists from "./CharacterLists";

const Characters = props => {
  console.log(props);
  // we want to fetch the data once every time the app render
  useEffect(() => {
    props.fetchCharacter();
  }, []);

  if (props.isFetching) {
    // while waiting for our data to come back we want to let user know.
    return <h2>Loading Rick and Morty Characters...</h2>;
  }

  return (
    <div className="character-list">
      {/* if there is an error in fetch called we want to display that message. */}
      {props.error && <p>{props.error}</p>}
      {props.characters.map(item => (
        <CharacterLists key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.characters,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchCharacter }
)(Characters);
