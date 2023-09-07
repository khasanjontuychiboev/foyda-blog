import BlogList from "./BlogList";

const Home = () => {



    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            { blogs && <BlogList datas={blogs} title="All blogs" /> }
        </div>
     );
}
 
export default Home;