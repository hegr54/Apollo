import Resolutions from './resolutions';

// Resolutions.insert({
//   name: "test res"
// });

const res=Resolutions.find({}).fetch();//selcionar de la base dato

console.log(res);

export default {
  Query:{
    resolutions(){
      return res;
    }
  },

  Mutation :{
    createResolution(){
      console.log("got here");
      //const resolutionsId= Resolutions.insert({
      //name: "test Res"
    //});
    }
  }
};
