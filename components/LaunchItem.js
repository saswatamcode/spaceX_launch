import Moment from "react-moment";

export default function LaunchItem({ mission_name, date, success }) {
  return (
    <div className="flex flex-row justify-between p-6 m-6 shadow rounded bg-gray-800 hover:bg-gray-700">
      <div className="flex flex-col">
        <h1 className="text-white font-bold text-2xl">
          Mission Name:{" "}
          {success ? (
            <span className="text-green-500">{mission_name}</span>
          ) : (
            <span className="text-red-700">{mission_name}</span>
          )}
        </h1>
        <p className="text-gray-600 text-base">
          Date: <Moment format="YYYY-MM-DD HH:mm">{date}</Moment>
        </p>
      </div>
    </div>
  );
}
