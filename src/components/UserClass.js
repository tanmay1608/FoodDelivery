import React from "react";



//what  are class based components: It is normal js class
// and to make it component we extends it with React.Component
//inside class we have a render method here which returns a piece of JSX
//React.Component is a class
class UserClass extends React.Component {

    //So earlier there were no hooks , so there was different wys to create state variables
    // we use this.state, state is reserved variable which is a object
    // so we create a state variable  when we instantiate a class
    //so, when we load our class base component of web page it means we are creating its object
    constructor(props){
        super(props);
          // so, here we are not using this.props=props as this super(props) does for us


        //so , in class component this state is a big objct which contains all the state varaibles which we created
        // and in functional component behind the scenes react does the same
        // this.state={
        //     count:0,
            
        // }

        this.state={
            userInfo:{
                name:"dummy",
                location:"deafult",
                img:"nothing"
            }
        }

        // console.log(this.props.name+" constructor");
      
       
    }

   async componentDidMount(){
       
    const data= await fetch(" https://api.github.com/users/tanmay1608");
    const json=await data.json();

    console.log(json);

    this.setState({
        userInfo:{
            name:json?.name,
            location:json?.location,
            img:json?.avatar_url
        }
    });
    
      
      }

      componentDidUpdate(){
        console.log("Compoenent did update");
      }

      componentWillUnmount(){

      }
    
    
    
    //it return piece of JSX
    render(){
        // console.log(this.props.name+" render");
        const {name,location,img}=this.state.userInfo;
        // const {count}=this.state;
        return (<div>
          
            {/* <button onClick={()=>{
                //NEVER UPDATE STATE VARAIBLES DIRECTLY
                // it will create inconsistency in code
                //this.state.count=this.state.count+1;

                //so react gives us an important function this.setState
                //here we pass object of updated state
                // this.setState({
                //     count:this.state.count+1
                //     //so if we have multiple states then it will comapare with original state object and update only those which we passed in setState 
                //     // basically caluclating diff between object
                // });// can be used anywhere inside the class

               
            }}>Click</button> */}
            <img src={img} alt="nothing"></img>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            
        </div>
        )
    }
}


export default UserClass;44

//componenet lifecycle
/**
 * so, as soon as this class is loaded
 * Render phase
 * - constructor()
 *    state variable are created with default value
 * - render (dummy)
 *    render happens with default value
 * 
 * Commit Phase
 * - react will update the DOM with dummy data
 * - componenetDidMout()
 *    API call made
 *    <this.setState>
 * 
 * ------Till here Mouting cycle happend-------
 * 
 * ----UPDATE
 * When we call setState update cycle begins
 *  - updates state varaibles
 *  - react triggers render once again render(API data)
 *  - update the DOM with new Value
 *  - componenetDidUpdate()
 *    
 * -----UNMOUNTING 
 * means when will component will disappear(removed) from web page
 * 
 *    
 * 
 *     
 * 
 * 
 * 
 * 
 * 
 */