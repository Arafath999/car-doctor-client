

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/3ybnKsX/muscular-car-service-worker-repairing-vehicle.jpg" className="w-full" />
                    <div className="absolute flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="text-white space-y-7 pl-12 mt-4 w-1/2">
                            <h2 className="text-6xl font-bold">Affordable Price for car servicing</h2>
                            <p className="text-2xl">There are many variation of passenger variable,but the majority has suffered alterations in some form </p>
                            <div>
                                <button className="btn btn-outline btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-accent">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/3ybnKsX/muscular-car-service-worker-repairing-vehicle.jpg" className="w-full" />
                    <div className="absolute flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="text-white space-y-7 pl-12 mt-4 w-1/2">
                            <h2 className="text-6xl font-bold">Affordable Price for car servicing</h2>
                            <p className="text-2xl">There are many variation of passenger variable,but the majority has suffered alterations in some form </p>
                            <div>
                                <button className="btn btn-outline btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-accent">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/3ybnKsX/muscular-car-service-worker-repairing-vehicle.jpg" className="w-full" />
                    <div className="absolute flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="text-white space-y-7 pl-12 mt-4 w-1/2">
                            <h2 className="text-6xl font-bold">Affordable Price for car servicing</h2>
                            <p className="text-2xl">There are many variation of passenger variable,but the majority has suffered alterations in some form </p>
                            <div>
                                <button className="btn btn-outline btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-accent">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/3ybnKsX/muscular-car-service-worker-repairing-vehicle.jpg" className="w-full" />
                    <div className="absolute flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="text-white space-y-7 pl-12 mt-4 w-1/2">
                            <h2 className="text-6xl font-bold">Affordable Price for car servicing</h2>
                            <p className="text-2xl">There are many variation of passenger variable,but the majority has suffered alterations in some form </p>
                            <div>
                                <button className="btn btn-outline btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-accent">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;