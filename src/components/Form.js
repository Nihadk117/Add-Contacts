import React from "react";
import { useForm } from "react-hook-form";

function Form({formSubb}) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    
    data.id=Date.now();
    data.fav=false;
    reset();
     formSubb(data);
    
   
     //console.log(data);
     
  }
  console.log(watch("example"));

  return (
    <div className="col-sm-4 shadow rounded g-s">
      <h1 className="text-center pt-3 text-secondary h2">Add Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="col-form-label">Name :</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required:"Name is required" })}
          />
          {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
        </div>
        <div className="form-froup">
          <label className="col-form-label">Email :</label>
          <input
            type="text"
            className="form-control"
            {...register("email", { required: "Email is required" })}
          />
         {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
        </div>
        <div className="form-group">
          <label className="col-form-label">Phone :</label>
          <input
            type="text"
            className="form-control"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && (<small className="text-danger">{errors.phone.message}</small>)}
        </div>
        <div className="form-group text-center">
          <input
            type="submit"
            className="btn  text-centerv btn-primary my-3"
            value="Add Contact"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
