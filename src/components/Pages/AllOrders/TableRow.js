import React from "react";

const TableRow = ({ order }) => {
  const { name, email, title, img, price, status } = order;
  console.log(order);
  return (
    <tr>
      <th>
        <label>
          <button className="btn btn-ghost">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">
          {status ? "Approved" : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
