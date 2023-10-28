import Banner from "../Banner/Banner";
import About from "./About";
import Services from "./Services";

const Home = () => {
    return (
        <div>
           <h2 className="text-2xl">this is a home page</h2>
           <Banner></Banner> 
           <About></About>
           <Services></Services>
        </div>
    );
};

export default Home;