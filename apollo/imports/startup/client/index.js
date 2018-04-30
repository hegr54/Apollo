import React from "react";
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import App from "../../ui/App";
//levantamos servidor de apollo listo para usarse


// const App =()=><h1> hello </h1>;

Meteor.startup(()=>{
  render(<App/>, document.getElementById('app'))
}); //renderizar app
// tareas
// que es jsx
//que es apollo
//que es meteor
