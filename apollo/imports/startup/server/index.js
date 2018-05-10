// console.log("server/index esta corriendo");
//
// import {createApolloServer} from "meteor/apollo";
// import {makeExecutableSchema} from "graphql-tools";
import "./register-api.js";
//createApolloServer({});//creacion de createApolloServer
//levantamos servidor de apollo listo para usarse
//funcion de tipo string
// const typeDefs=`
//   type Query{
//     hi:String
//   }`;
// const resolvers={//se usa en los rensorver
//         Query:{
//           hi(){
//             return "Hello world from meteor via apollo"
//           }
//         }
//   };
//   //se usan
//
//
//   const schema=makeExecutableSchema({
//     typeDefs,
//     resolvers
//   });
//   createApolloServer({schema});//llamas la pagina localhost:3000/graphiql
