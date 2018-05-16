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
    createResolution(obj, {name}, context){
      // console.log("got here");
      const resolutionId=Resolutions.insert({  //insertar id
        name
      });
      return Resolutions.findOne(resolutionsId);  //consultar
      //const resolutionsId= Resolutions.insert({
      //name: "test Res"
    //});
    }
  }
};
