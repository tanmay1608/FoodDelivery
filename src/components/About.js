import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends Component{
  constructor(){
    super();
    console.log("parent constructor");
  }

  //Called after component got rendered
  componentDidMount(){
    console.log("parent component did Mount ");
  }
  render(){
    
    return (
      <div>
        <h1>About section!!!</h1>
        <UserClass name={"first"} location={"Jaipur"} contact={"+91 96XX453XX6"}></UserClass>
        <UserContext.Consumer>
          {(data)=>(<h1>{data.loggedInUser}</h1>)}
        </UserContext.Consumer>
        {/* <UserClass name={"second"} location={"Jaipur"} contact={"+91 96XX453XX6"}></UserClass> */}
      
      </div>
    )
  }
}

//Lifecycle of About and Userclass component

//Expectations:
  /**
   * - parent constructor
   * - parent render
   * 
   *   - first constructor
   *   - first render
   *   - first component did mount
   * 
   *   - second constructor
   *   - second render
   *   - second component did mount
   * 
   * - parent component did mount
   * 
   */

  
  /**
   * In react when component is mounted it is mounted in two phases
   * 1-> Render phase: constructor() -> render() --> 
   * 2-> Commit Phase
   * This is the reason react is fast
   * constructor() -> render() -> updates the DOM -> componentDidMount[thats why it is best place to make API call]
   * This Mounting cycle happens for every component in react
   * 
   * so, as here we have mupltiple child of About so, react does optimization here and bacthes the render phase of all child so their render phase happen then commit phase heppen ek saath , to reduce DOM updation as it is costliest task
   * but why react is doing this?
   * beacuse once the commit phase starts react tries to update the DOM and DOM manupilation is thee most expensive thing, when we are updating a component
   * so, here in rendr basically it is triggring hte reconciliation and finding the diff between virtual DOM
   * render is fast but commit is slow as in render we find diff which is virtual dom js object, but in commit we update DOM
   * so, ract tries to bactup render and bacth up commit
   * 
   */
//Reality  
 /**
   * - parent constructor
   * - parent render
   * 
   *  Render phase is batched
   *   - first constructor
   *   - first render
   *   - second constructor
   *   - second render
   * 
   *  Commit phase is batched
   *    <DOM UPDATED -  IN SINGLE BATCH >
   *   - first component did mount
   *   - second component did mount
   * 
   * - parent component did mount
   */


// const About=()=>{
//   return (
//     <div>
//       <h1>About section!!!</h1>
//       <UserClass name={"Tanmay Barjatya"} location={"Jaipur"} contact={"+91 96XX453XX6"}></UserClass>
//     </div>
//   )
// }

export default About;