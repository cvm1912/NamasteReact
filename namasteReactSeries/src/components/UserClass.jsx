import React from "react";
import User from "./User";
class UserClass extends React.Component{
    constructor(props){
      super(props)
      console.log(props);
      this.state ={
        count:0,

      }
    }
    render(){
      const {name, location} = this.props
      return(
       <div className='user-card'>
       <p>{this.state.count}</p>
       <button onClick={()=>{
         this.setState({
          count:this.state.count+1
         })
       }}>Click</button>
      </div>
      );
    }


}
export default UserClass;
