import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log(props);    
    this.state = {
        count: 0,
        count2: 12,
    };  
    }

async componentDidMount(){
    // console.log("child component did mount ");
    const data = await fetch("https://api.github.com/users/abhijadhav03");
    const json = await data.json();
    console.log(json);
}
    render() {

        const {name , location} = this.props;
        console.log("props in render" , this.props);
        const {count, count2} = this.state;
        return (
            <div className="user-test">
                   <h1>count : {count}</h1>
                   <button onClick={()=>{
                     // NEVER UPDATE STATE VARIABLES DIRECTLY 
                      this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                      })
                   }}>count increase</button>
            <h1>Name: {name}</h1>
            <h2>Hello JS</h2>
            <h3>location: {location}</h3>
            <h4>contact : @abhijadhav06</h4>
            </ div>
        ) ;
    }
}
export default UserClass;

// -parent constructor
// - parent render
// - render 
// child component did mount
// child1 constructor 
// child 2 constructor 

//parent  componentDidMount