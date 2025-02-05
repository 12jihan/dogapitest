import React, { ReactElement, useEffect } from "react";
import useApi from "../custom-hooks/useApi";
import { Link } from "react-router";
// interface ErrorInterface {
//
// };

const ErrorComponent = (): ReactElement => {
  return (
    <div className="error-card">
      <p>There was an error with your request</p>
    </div>
  );
};

const DataComponent = ({ api_data }: any) => {
  if (!api_data) return null;
  return (
    <div className="item-container">
      {api_data.data.map((breed: any) => (
        <div className="item">
          <Link key={breed.id} to={"/" + breed.id}>
            {breed.attributes.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

function HomeComponent(): ReactElement {
  const { data, loading, refetch, error } = useApi(
    "https://dogapi.dog/api/v2/breeds",
  );

  useEffect(() => {
    refetch();
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error && error != null) {
    console.log("data error", data);
    return ErrorComponent();
  }

  if (data == null) {
    console.log("data is null", data);
    return ErrorComponent();
  }

  return <DataComponent api_data={data} />;
  // return  <p>hi</p>;
}

export default HomeComponent;
