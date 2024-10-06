import { FaXmark } from "react-icons/fa6";

const Error = ({
  error = { errorStatus: false, errorMessage: "" },
  setError,
}) => {
  return (
    <>
      {error.errorStatus && (
        // Display Error
        <div className="flex flex-row items-center p-2 bg-red-300 border rounded-md border-red-500">
          {/* Error Message */}
          <h3 className="flex-grow text-center">{error.errorMessage}</h3>

          {/* X Mark */}
          <FaXmark
            className="cursor-pointer text-red-600 w-5 h-5"
            onClick={() =>
              setError((prev) => ({ errorStatus: false, errorMessage: "" }))
            }
          />
        </div>
      )}
    </>
  );
};

export default Error;
