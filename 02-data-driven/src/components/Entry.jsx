import Marker from "../assets/marker.png";
function Entry(props) {
  return (
    <article className="articleDiv">
      <img
        src={props.entry.img.src}
        alt={props.entry.img.alt}
        className="locationImg"
      />
      <div className="textSection">
        <div className="countryRow">
          <img src={Marker} alt="Location Marker" className="locationMarker" />
          <span className="cityName">{props.entry.country}</span>
          <span className="mapsLink">
            <a href={props.entry.googleMapsLink}>View on Google Maps</a>
          </span>
        </div>
        <h1>{props.entry.title}</h1>
        <h6>{props.entry.dates}</h6>
        <p>{props.entry.text}</p>
      </div>
    </article>
  );
}
export default Entry;
