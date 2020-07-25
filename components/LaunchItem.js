import { useState } from "react";
import Moment from "react-moment";

export default function LaunchItem({
  mission_name,
  date,
  success,
  rocket_name,
  rocket_type,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 m-6 sm:m-2 shadow rounded bg-gray-800">
      <div className="flex flex-row sm:flex-col justify-between">
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
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-white font-bold m-1 p-2 rounded bg-gray-600 hover:bg-gray-700"
        >
          {expanded ? "Collapse" : "Launch Details"}
        </button>
      </div>
      {expanded && (
        <div className="flex flex-col text-white text-2xl m-4">
          <span>
            {success ? "Launch was successful" : "Launch was not successful"}
          </span>
          <span>Rocket Name: {rocket_name}</span>
          <span>Rocket Type: {rocket_type}</span>
        </div>
      )}
    </div>
  );
}
