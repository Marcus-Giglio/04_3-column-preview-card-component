interface Props {
  iconCar: string;
  alt: string;
  category: string;
  description: string;
  style: Colors;
}

export enum Colors {
  brightOrange = "hsl(31, 77%, 52%)",
  darkCyan = "hsl(184, 100%, 22%)",
  veryDarkCyan = "hsl(179, 100%, 13%)",
}

const Card = (props: Props) => {
  return (
    <div
      className="col-12 col-lg-4 p-5 car-card"
      style={{ background: props.style }}
    >
      <div className="row">
        <div className="col pb-4">
          <img src={props.iconCar} alt={props.alt} className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <div className="mb-4 category">{props.category}</div>
          <p className="description mb-4 mb-lg-5 pb-lg-5">
            {props.description}
          </p>
          <button className="learnMore-btn" style={{ color: props.style }}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
