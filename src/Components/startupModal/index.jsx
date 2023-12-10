/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const StartupModal = ({startup, id}) => {
  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="text-xl font-bold mb-2">
                  {startup.StartupName}
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                 Industry : {startup.IndustryVertical}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                Sub-Industry : {startup.SubVertical}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                 City Name: {startup.CityLocation}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {startup.Remarks}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Starting Year: {startup.Date}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Investor Name: {startup.InvestorsName}
                </p>
                <p className="text-green-600 text-lg font-bold">
                  Funding Amount: ${startup.AmountInUSD}
                </p>
        </div>
      </dialog>
    </div>
  );
};

export default StartupModal;
