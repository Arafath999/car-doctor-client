

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                    <img src="https://i.ibb.co/3ybnKsX/muscular-car-service-worker-repairing-vehicle.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/3ybnKsX/muscular-car-service-worker-repairing-vehicle.jpg" className="w-1/2 absolute right-5 border-8 border-white top-1/2 rounded-lg shadow-2xl" />
                    </div>
                    <div className="lg:w-1/2 space-y-5">
                        <h1 className="text-5xl font-bold text-orange-500 mb-4">About</h1>
                        <h1 className="text-5xl font-bold">We are qualified for experience in this field</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;