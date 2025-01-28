import "./index.css"

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Component} from "react";
import BlogItem from "../BlogItem";


class BlosList extends Component{
    state={blogsData:[],isLoading:true}

    componentDidMount(){
        this.getBlogsData()
    }
    
    getBlogsData=async()=>{
        const response=await fetch("https://apis.ccbp.in/blogs")
        const data=await response.json()
        const updatedData=data.map((e)=>({
            id:e.id,
            title:e.title,
            imageUrl:e.image_url,avatarUrl:e.avatar_url,
            author:e.author,topic:e.topic
        }))
        this.setState({blogsData:updatedData,isLoading:false})
    }
    render(){
        const {blogsData,isLoading}=this.state
        console.log(blogsData)
        return(
            <div className="blog-container">

    {isLoading? 
    (<Loader type="TailSpin" color="black" height={50} width={50} />):
            (<div>{blogsData.map((e)=><BlogItem item={e} />)}</div>)
        }    
            </div>
            
        )

    }
}

export default BlosList