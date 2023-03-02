import React from "react";

function Contacts({ contact: { id,name, phone, email,fav },deleteContact,favToggle }) {

  return (
    <>
      <div className="col">
        <div className="card shadow-sm w-100">
          <div className="card-header">
            <div className="row">
              <div className="col-6">{name}</div>
              <div className="col-2 offset-4">
                <i onClick={()=>{favToggle(id)}} className={ fav? "fas fa-star text-warning":"far fa-star text-warning"}></i>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{phone}</li>
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">
              <button  type="button" onClick={()=>{deleteContact(id)}}className="btn btn-outline-danger" >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contacts;
