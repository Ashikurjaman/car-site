import React from "react";

const BookingsRow = ({ booking,handelDelete,handelConfirmBook }) => {
  const { _id,customerName, email, date, price, service, img,status } = booking;
  return (
    <tr>
        <th>
        <button onClick={()=>handelDelete(_id)} className="btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{price}</td>
      <th>
        {
          status === 'confirm' ? <span  className="btn btn-ghost btn-xs bg-slate-900 text-slate-50">Confirm</span>:
          <button  onClick={()=>handelConfirmBook(_id)} className="btn btn-ghost btn-xs bg-slate-300">Pending</button>}
      </th>
    </tr>
  );
};

export default BookingsRow;
