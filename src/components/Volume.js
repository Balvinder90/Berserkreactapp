import { useState } from "react";

const Volume = ({
  image,
  name,
  release,
  synopsis,
  amazon,
  amazonLink,
  darkhorse,
  darkhorseLink,
  cartIcon,
}) => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => (isShow ? setIsShow(!isShow) : setIsShow(!isShow));

  return (
    <div className="volumes__item">
      <img
        src={image}
        alt={`Volume ${name}`}
        title={`Volume ${name}`}
        className="volumes__img"
      />
      <div className="volumes__desc">
        <span className="volumes__name">Volume {name}</span>
        <span className="volumes__release">Release: {release}</span>
      </div>
      <button onClick={handleClick} className="volumes__button">
        {isShow ? "Show less" : "Show more"}
      </button>
      {isShow ? (
        <div className="volumes__details">
          <hr className="author__divider" />
          <h4>Volume {name}</h4>
          {synopsis.split("\n").map((item, index) => {
            return (
              <p key={index}>
                {item}
                {<br />}
              </p>
            );
          })}
          <hr className="author__divider" />

          <div className="volumes__purchase">
            <div className="volumes__vendor">
              <a
                className="volumes__info"
                target="_blank"
                rel="noreferrer"
                href={amazonLink}
              >
                {amazon}
              </a>
              <div className="volumes__cart">
                <img
                  className="volumes__cart-icon"
                  src={cartIcon}
                  alt={amazon}
                  title={amazon}
                />
              </div>
            </div>
            <div className="volumes__vendor">
              <a
                className="volumes__info"
                target="_blank"
                rel="noreferrer"
                href={darkhorseLink}
              >
                {darkhorse}
              </a>
              <div className="volumes__cart">
                <img
                  className="volumes__cart-icon"
                  src={cartIcon}
                  alt={darkhorse}
                  title={darkhorse}
                />
              </div>
            </div>
          </div>
          <hr className="author__divider" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Volume;
