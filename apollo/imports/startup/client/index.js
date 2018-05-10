import React from "react";
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
//conecciones con el cliente
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import App from "../../ui/App";

//Conecciones con apollo
const httplink = new HttpLink({  //generamos una liga con meteor con apollo
  uri:Meteor.absoluteUrl("graphql")
});
//CREACION DEL OBJETO TEMPORAL
//VARIABLE PARA GENERAR EN MEMORIA
const cache = new InMemoryCache();
//fuencion que resive un objeto que resive el parametero link
const client = new ApolloClient({
  link:httplink,
  cache
});
//funcion anomima
const ApolloApp =()=>(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
//levantamos servidor de apollo listo para usarse


// const App =()=><h1> hello </h1>;

Meteor.startup(()=>{
  render(<ApolloApp />, document.getElementById('app'))
}); //renderizar app
// tareas
// que es jsx
//que es apollo
//que es meteor
