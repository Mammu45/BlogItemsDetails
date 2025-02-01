import { Component } from "react";

import "./index.css"

class BlogItemDetails extends Component{

    state={details:{}}
    
    componentDidMount(){
        this.getBlogFullDetails()
    }

    getBlogFullDetails=async()=>{
        console.log(this.props)
        const {match}=this.props
        const {params}=match
        const {id}=params
        const response=await fetch(`https://apis.ccbp.in/blogs/${id}`)
        const data=await response.json()
        console.log(data);
        
        const getData={
            id:data.id,
            imageUrl:data.image_url,
            content:data.content,
            author:data.author,
            avatarUrl:data.avatar_url,
            titl:data.title,
            topic:data.topic
            
        }
        this.setState({details:getData})



        
        

        
    }

    onBlogsList=()=>{
        

    }


    

    render(){
        const {details}=this.state
        const {topic,content,imageUrl,avatarUrl,author,title}=details
        return(
            <div className="blog-items">
                <div className="center">   
                <img src={imageUrl} className="img" alt="pic"/>
                <h1>{title}</h1>
                <p>{topic}</p>
                <p>{content}</p>
                <div className="profile">
                    <img src={avatarUrl} className="person" alt="p" />
                    <p className="name">{author}</p>
                </div>
                </div>

            </div>
        )
    }
}


export default BlogItemDetails