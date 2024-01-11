import { useLocation } from "react-router-dom";
import { my_blogs } from "../blogc";
import Header from "../components/Header";

const BlogPage = () => {
    let {state} = useLocation();
    let blog_id = state.blog_id;
  return (
    <div>
        <Header />
    <div className="container">
        <div className="inner-container">
        <h2  id= "ti" className="blog-title">{my_blogs[blog_id].title}</h2>
            <div className="sub">
            <p className="blog-author">{my_blogs[blog_id].author}</p>
            <p className="blog-date">{my_blogs[blog_id].date}</p>
            </div>
            <img  src={my_blogs[blog_id].image} alt="" className="hero-image" />
            <div className="blog-content">
                <p className="content">{my_blogs[blog_id].content}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BlogPage