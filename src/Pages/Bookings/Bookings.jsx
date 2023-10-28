import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    

    useEffect(() => {
        const url = `http://localhost:5000/bookings?email=${user?.email}`;
        axios.get(url,{withCredentials: true})
        .then(res => {
            setBookings(res.data);
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [user?.email])
    const handleDelete = id => {
        const proceed = confirm('are you sure delete')
        if(proceed){
           fetch(`http://localhost:5000/bookings/${id}`,{
             method: "DELETE"
           })
           .then(res => res.json())
           .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted successfully')
                const booking = bookings.filter(booking => booking._id !== id);
                setBookings(booking)
            }
           })
        }
    }

    const handleBookingUpdate = id => {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0 ){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }

    return (
        <div>
            <h2 className="text-2xl">bookings{bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       


                    </tbody>
                    {
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingUpdate={handleBookingUpdate}></BookingRow>)
                        }

                </table>
            </div>
        </div>
    );
};

export default Bookings;