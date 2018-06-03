import * as React from "react";
import * as ReactDOM from "react-dom";
import Deck from "./components/Deck";

ReactDOM.render(<Deck back="normal" shuffle={false} />, document.querySelector('#app'));