const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, email, service, price, status } =
    booking;

  // console.log(booking)

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline"
        >
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
            <div className="mask mask-squircle w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{email}</td>
      <td>{"$" + price}</td>
      <th>
        {
          status === "confirm" ? (<button className="btn btn-secondary btn-xs text-white">
            Confirm</button>
          ) : (
            <button onClick={() => handleBookingConfirm(_id)} className="btn btn-primary text-white btn-xs"> Pending </button>
          )}
      </th>
    </tr>
  );
};

export default BookingsRow;