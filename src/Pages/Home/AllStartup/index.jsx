/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";

const AllStartup = () => {
  const { data: allStartup } = useQuery({
    queryKey: ["categoriyy"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/startup");
      const data = await res.json();
      return data?.getstartup;
    },
  });
//   console.log(allStartup);
  return (
    <div>
      <h1>All Startup List {allStartup?.length}</h1>
    </div>
  );
};

export default AllStartup;
