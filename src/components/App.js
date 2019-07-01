import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        client_id:
          "b670abd0cf690c6efb88d419b8e0537d5d45af273313c04cb2ab13abc86e107c",
        query: term
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "3rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
