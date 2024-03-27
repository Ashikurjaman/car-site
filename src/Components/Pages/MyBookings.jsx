import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/AuthContext";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";
import axios from "axios";

const MyBookings = () => {
  const { user } = useContext(UserContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user.email}`
  useEffect(() => {
    axios.get(url,{withCredentials:true})
    .then(res=>{
      setBookings(res.data)
      console.log(res.data)
    })
  }, [url]);
  
  const handelDelete = id =>{
    
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }
      
      )
      .then((result) => {
        
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            delete:fetch(`http://localhost:5000/bookings/${id}`,{
              method:"DELETE"
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount > 0){
              const remaining = bookings.filter(booking=>booking._id !== id)
              setBookings(remaining)}
            })
          });
          
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });

     
  }
  const handelConfirmBook = id =>{

    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({status:'confirm'})
        
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount > 0){
        const remaining = bookings.filter(booking=>booking._id !== id)
        const updateBook = bookings.find(booking=>booking._id === id)
        updateBook.status='confirm'
        const setBooking= [updateBook, ...remaining]
        setBookings(setBooking)
      }
    })
  }


  return (
    <div className="mt-8">
        
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}

          <thead>
            
            <tr>
            <th></th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Email</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map(booking=><BookingsRow key={booking._id}
                booking={booking}
                handelDelete={handelDelete}
                handelConfirmBook={handelConfirmBook}
                >
                </BookingsRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
