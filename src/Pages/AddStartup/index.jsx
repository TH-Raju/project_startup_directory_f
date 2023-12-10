/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

const AddStartup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>Add New Startup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Product Name"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
        <input type="submit" className="btn btn-success my-4" />
      </form>
    </div>
  );
};

export default AddStartup;
