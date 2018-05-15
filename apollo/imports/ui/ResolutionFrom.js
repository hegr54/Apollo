import React, {Component} from "react";
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const createResolution = gql`
      mutation createResolution{
        createResolution{
          _id
        }
      }
`;

class ResolutionFrom extends Component{

    submitFrom = () =>{
      console.log(this.name.value);
      this.props.createResolution()
    };

    render(){
      return(
        <div>
            <input type="text" ref={input => (this.name =input)}/>
            <button onClick={this.submitFrom}>submit</button>
        </div>
      )
    }
}

export default graphql(createResolution, {name: 'createResolution'})(ResolutionFrom)
