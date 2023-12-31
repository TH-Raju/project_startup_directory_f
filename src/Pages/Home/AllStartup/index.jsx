/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import StartupModal from "../../../Components/startupModal";

const AllStartup = () => {
  let [filterData, setFilterData] = useState([]);
  const [load, setLoad] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(20);
  const { data: allStartup, refetch } = useQuery({
    queryKey: ["categoriyy"],
    queryFn: async () => {
      setLoad(true);
      const res = await fetch(
        "https://startup-directory-5vyho7snc-th-raju.vercel.app/api/v1/startup"
      );
      const data = await res.json();
      if (data) {
        setLoad(false);
      }
      return data?.getstartup;
    },
  });

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

  const pagi = () => {
    if (end < allStartup?.length) {
      setStart(start + 20);
      setEnd(end + 20);
      refetch();
    } else {
      setStart(0);
      setEnd(20);
    }
  };

  const pagiBack = () => {
    if (start > 20) {
      setStart(start - 20);
      setEnd(end - 20);
      refetch();
    } else {
      setStart(0);
      setEnd(20);
    }
  };

  return (
    <div className="mb-10">
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
      <div className="flex justify-end gap-4 mb-2 mr-3 items-center">
        {start > 1 && (
          <button className="btn btn-sm btn-primary" onClick={() => pagiBack()}>
            {"<"}
          </button>
        )}
        <p>
          {start} - {end < allStartup?.length ? end : allStartup?.length} ({allStartup?.length})
        </p>
        <button className="btn btn-sm btn-primary" onClick={() => pagi()}>
          {">"}
        </button>
      </div>
      {load && (
        <div className="text-center">
          <span className="loading loading-bars loading-lg "></span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filterData.length > 0
          ? filterData?.slice(start, end).map((startup) => (
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
          : allStartup?.slice(start, end).map((startup) => (
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
    </div>
  );
};

export default AllStartup;
