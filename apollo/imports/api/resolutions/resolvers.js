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
  }
};
