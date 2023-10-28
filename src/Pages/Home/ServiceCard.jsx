import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {_id,service_id,title,img,price,description} = service;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">{service_id}</h2>
                    <h2 className="font-bold text-orange-500 text-2xl">{price}</h2>
                    {/* <p>{description}</p> */}
                    <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-primary">Knock Now</button>
                            </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;