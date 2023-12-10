/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import StartupModal from "../../../Components/startupModal";

const AllStartup = () => {
  let [filterData, setFilterData] = useState([]);
  const [load, setLoad] = useState(false);
  const { data: allStartup } = useQuery({
    queryKey: ["categoriyy"],
    queryFn: async () => {
      setLoad(true);
      const res = await fetch("http://localhost:5000/api/v1/startup");
      const data = await res.json();
      if (data) {
        setLoad(false);
      }
      return data?.getstartup;
    },
  });
  //   let loadData = 20;
  //   let maxData = allStartup?.length;
  //   const moreData = () => {
  //     if (loadData >= maxData) {
  //       loadData = 20;
  //       console.log(loadData);
  //     } else {
  //       loadData += 20;
  //       console.log( loadData);
  //     }
  //   };
  //   console.log(allStartup);
  const handleOnchange = (e) => {
    const industry = e.target.value;
    // console.log(productName);

    const filterproductName = allStartup?.filter(
      (item) => item?.IndustryVertical === industry
    );

    setFilterData(filterproductName);
    // if (filterproductName) {
    //   console.log(filterproductName);
    // }
  };

  const clearFilter = () => {
    filterData = [];
    setFilterData(filterData);
    // console.log(filterData);
  };

  const uniqueProductName = [
    ...new Set(allStartup?.map((order) => order?.IndustryVertical)),
  ];
  //   console.log(filterData);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">All Startup </h1>
      <div className="my-4">
        <span className="font-bold ml-4">Filter Data :</span>
        <select
          className="select select-primary ml-4 text-black"
          onChange={handleOnchange}
        >
          <option disabled selected>
            Select
          </option>

          {uniqueProductName.map((productName, i) => (
            <option key={i} value={productName} className="text-black">
              {productName}
            </option>
          ))}
        </select>

        {filterData.length > 0 && (
          <button className="btn btn-primary  mx-3" onClick={clearFilter}>
            Reset
          </button>
        )}
      </div>
      {load && (
        <div className="text-center">
          <span className="loading loading-bars loading-lg "></span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filterData.length > 0
          ? filterData?.map((startup) => (
              <div
                key={startup._id}
                className="bg-white border border-sky-400 p-4 rounded-lg shadow-md"
                onClick={() => document.getElementById(startup._id).showModal()}
              >
                <h2 className="text-xl font-semibold mb-2">
                  {startup.StartupName}
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  {startup.CityLocation}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Starting Year: {startup.Date}
                </p>
                <p className="text-green-600 text-lg font-bold">
                  Funding Amount: ${startup.AmountInUSD}
                </p>
              </div>
            ))
          : allStartup?.map((startup) => (
              <div
                key={startup._id}
                className=" bg-white p-4 border border-sky-400 rounded-lg shadow-md"
                onClick={() => document.getElementById(startup._id).showModal()}
              >
                <h2 className="text-xl font-semibold mb-2">
                  {startup.StartupName}
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  {startup.CityLocation}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Starting Year: {startup.Date}
                </p>
                <p className="text-green-600 text-lg font-bold">
                  Funding Amount: ${startup.AmountInUSD}
                </p>

                <StartupModal startup={startup} id={startup._id} />
              </div>
            ))}
      </div>
      {/* <div className="text-center my-10">
        <button
          className="btn btn-outline"
          onClick={() => {
            moreData();
          }}
        >
          Load More
        </button>
      </div> */}
    </div>
  );
};

export default AllStartup;
