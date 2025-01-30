import { Component } from "react";

import "./index.css"

class BlogItemDetails extends Component{
    componentDidMount(){
        this.getBlogFullDetails()
    }

    getBlogFullDetails=()=>{
        console.log(this.props)
        
    }


    

    render(){
     return(
        <div className="Container">
            <h1>Heading</h1>
       </div>
     )
    }
}


export default BlogItemDetails