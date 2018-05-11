import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import {makeExecutableSchema} from "graphql-tools";
import {createApolloServer} from "meteor/apollo";
import merge from 'lodash/merge';
import ResolutionsResolvers from "../../api/resolutions/resolvers";

const testSchema= `
  type Query{
    hi:String
    resolutions: [Resolution]
  }`;
const typeDefs=[
  testSchema,
  ResolutionsSchema
];
const testResolvers={//se usa en los rensorver
        Query:{
          hi(){
            return "Hello world from meteor via apollo"
          }
          // resolutions(){
          //   return[{
          //     _id:"algoalgo",
          //     name:"just do it!"
          //   }];
          // }
        }
  };
  //se usan

const  resolvers=merge(testResolvers, ResolutionsResolvers)//concatenadado de un string

console.log(resolvers);
  const schema=makeExecutableSchema({
    typeDefs,
    resolvers
  });
  createApolloServer({schema});//llamas la pagina localhost:3000/graphiql
