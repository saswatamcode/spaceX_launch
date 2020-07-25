import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";

const LAUNCHES = gql`
  query GetLaunches {
    launches {
      id
      mission_name
      launch_date_local
      launch_year
      launch_success
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

export default function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error :(</p>;

  return (
    <>
      <h2 className="text-white font-bold text-3xl leading-normal">Launches</h2>
      {data.launches.map((launch) => {
        return (
          <LaunchItem
            key={launch.id}
            mission_name={launch.mission_name}
            date={launch.launch_date_local}
            success={launch.launch_success}
          ></LaunchItem>
        );
      })}
    </>
  );
}
