import React from 'react'
import SuccessComponent from './SuccessComponent'


function SuccessStory(){
    const pass ="Passing to SuccessComponent"
    return(
    <div>There once was a boy who grew up to be rich
    <SuccessComponent text={pass}/>
    </div>
);
}

export default SuccessStory
