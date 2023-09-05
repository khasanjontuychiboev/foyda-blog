import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:'New Blog 1', body:'lorem impsum bla bla bla bla', author:'xasan', id:1},
        {title:'New Blog 2', body:'lorem impsum bla bla bla bla', author:'zohid', id:2},
        {title:'New Blog 3', body:'lorem impsum bla bla bla bla', author:'bobur', id:3},
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs"/>
        </div>
     );
}
 
export default Home;