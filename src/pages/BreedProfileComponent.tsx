import { ReactElement, useEffect } from "react";
import { useParams } from "react-router";
import useApi from "../custom-hooks/useApi";

function BreedProfileComponent(): ReactElement {
  const { id } = useParams();
  const { data, loading, error, refetch } = useApi(
    "dogProfile_" + id,
    "https://dogapi.dog/api/v2/breeds/" + id
  );

  useEffect(() => {
    refetch();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>There was an error with your component</div>;
  if (data == null && !loading) return <div>Breed was Not found</div>;

  return (
    <>
      <div className="bp-container">
        <h1>{data.data.attributes.name}</h1>
        <div>
          <div>
            <p>{data.data.attributes.description}</p>
            <div className="dog-lifespan">
              <p>{data.data.attributes.life.max}</p>
              <p>{data.data.attributes.life.min}</p>
            </div>
            <div className="dog-weight">
              <div className="dog-female">
                <p>{data.data.attributes.female_weight.max}</p>
                <p>{data.data.attributes.female_weight.min}</p>
              </div>
              <div className="dog-male">
                <p>{data.data.attributes.female_weight.max}</p>
                <p>{data.data.attributes.female_weight.min}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreedProfileComponent;
