/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const AddStartup = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    const url = "http://localhost:5000/api/v1/startup/add";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          reset();
          alert("Successfully Added");
          navigate("/");
        } else {
          alert("Something Wrong!");
        }
      });
  };

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let newDate = day + "/" + month + "/" + year;
  //   console.log(newDate);
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-center text-3xl font-bold mb-5">Add New Startup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Date <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              value={newDate}
              {...register("Date", {
                required: "Date is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Startup Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Startup Name"
              {...register("StartupName", {
                required: "Date is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Industry Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Industry Name"
              {...register("IndustryVertical", {
                required: "IndustryVertical is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Sub Industry Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Sub Industry Name"
              {...register("SubVertical", {
                required: "SubVertical is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                City Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Startup Location"
              {...register("CityLocation", {
                required: "CityLocation is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Investors Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Investors Name"
              {...register("InvestorsName", {
                required: "InvestorsName is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Investment Type <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Investment Type"
              {...register("InvestmentType", {
                required: "InvestmentType is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Amount In USD <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="number"
              placeholder="Enter Amount"
              {...register("AmountInUSD", {
                required: "AmountInUSD is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">Remarks </span>
            </label>
            <textarea
              type="text"
              placeholder="Write Details of your startup"
              {...register("Remarks")}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <input type="submit" className="btn btn-success my-4 px-10" />
      </form>
    </div>
  );
};

export default AddStartup;
