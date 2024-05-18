import React, { Component, PureComponent } from "react";
import React from 'react';
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";
import UserSignIn from "./UserSignIn";


function SuccessComponent() {
    const name = "Sie"
    const address = "chicago"
    const someonesSuccess = SuccessStory
    
        return (
            <div>
                <h5>Displaying a message here. Success is important. We can all achieve if we dream
                My name is {this.state.firstName}</h5>
                
                <SuccessChild person={name} />
                <SuccessChild location={address}/>
                <SuccessChild boysSuccess={someonesSuccess}/>
                <UserSignIn/>
            </div>
        )
    
}

export default SuccessComponent

// constructor(){
//     super()
//     this.state = {firstName: "Siera", 
//                 address: "Chicago"}
// }