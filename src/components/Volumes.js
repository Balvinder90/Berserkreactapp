import { useState, useEffect } from "react";
import Header from "../components/Header";
import Volume from "../components/Volume";
import data from "../json/data.json";

const Volumes = () => {
  const [volumes, setVolumes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getVolumes = () => {
    const response = data;
    setTimeout(() => {
      setLoading(false);
      setVolumes(response);
    }, 3500);
  };

  useEffect(() => {
    getVolumes();
  }, []);

  return (
    <>
      <Header />
      <section className="volumes">
        {isLoading ? <></> : <h4>List of Volumes</h4>}
        {isLoading ? (
          <img
            className="volumes__loading"
            src="img/brand.png"
            alt="Loading"
            title="Loading"
          />
        ) : (
          <p>Below is a list of all Berserk manga releases.</p>
        )}
        <div className="volumes__list">
          {volumes.map((volume) => {
            return <Volume key={volume.id} {...volume} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Volumes;
