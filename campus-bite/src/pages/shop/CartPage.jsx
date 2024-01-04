import React from "react";

const CartPage = () => {
  return (
    <div className="sction-container">
      <div className="flex flex-col md:flex-row items-center justify-center pt-28">
        <h2 className="sm:text-5xl text-3xl font-bold">Added foods</h2>
      </div>

      {/* Cart table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-yellow">
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
