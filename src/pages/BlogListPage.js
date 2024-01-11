import Header from "../components/Header";
import {  useNavigate } from "react-router-dom";
import { my_blogs } from "../blogc";

const BlogListPage = () => {
    let navigate =useNavigate()
  return (
    <div>
        <Header />
    <div className="container">
        <div className="inner-container">
            <h1 className="page-title">My Blog List</h1>
            <div className="blog-list">
                {Object.keys(my_blogs).map((blog, index)=>(
                    <div className="blog-preview" key={index} onClick={()=>{
                        navigate("/blog", {state: {blog_id: blog}})
                    }}>
                        <div className="blog-previewleft">
                            <h2 className="blog-title">{my_blogs[blog].title}</h2>
                            <p className="blog-author">{my_blogs[blog].author}</p>
                        </div>
                        <p className="blog-date">{my_blogs[blog].date}</p>
                        </div>
                )
                
                )}
            </div>
            
        </div>

    </div>
    </div>
  )
}

export default BlogListPage