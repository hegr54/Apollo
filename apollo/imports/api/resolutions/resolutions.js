import {Mongo} from 'meteor/mongo';

const Resolutions=new Mongo.Collection("resolutions");  //coneccion a la base de datos

export default Resolutions;
