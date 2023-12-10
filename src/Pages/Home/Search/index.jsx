/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";

const Search = () => {
  const data = useLoaderData().searchData;
  // console.log(data);
  return (
    <div>
      <h1> {data.length} result found:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.length > 0 ? (
          data?.map((startup) => (
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
        ) : (
          <div className="text-center mt-7">
            <h1 className="font-bold text-2xl ">Not matched with any data</h1>
            <h1>Search by full name of startup/industry/sub-industry</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
