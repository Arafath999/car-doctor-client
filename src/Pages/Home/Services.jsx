import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services,setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center">
               <h3 className="text-3xl text-orange-300">Our Services</h3>
               <h2 className="text-5xl">Our services area</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, numquam neque? Distinctio,<br/> quibusdam nam ex minus et praesentium ipsa. Dolores consequatur fuga officia deserunt cumque, iusto provident dignissimos fugiat sint.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 space-y-6 mt-4 mb-4">
               
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;