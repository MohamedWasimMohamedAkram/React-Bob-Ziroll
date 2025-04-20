import Marker from "../assets/marker.png";
function Entry(props) {
  return (
    <article className="articleDiv">
      <img src={props.img.src} alt={props.img.alt} className="locationImg" />
      <div className="textSection">
        <div className="countryRow">
          <img src={Marker} alt="Location Marker" className="locationMarker" />
          <span className="cityName">{props.country}</span>
          <span className="mapsLink">
            <a href={props.googleMapsLink}>View on Google Maps</a>
          </span>
        </div>
        <h1>{props.title}</h1>
        <h6>{props.dates}</h6>
        <p>{props.text}</p>
      </div>
    </article>
  );
}
export default Entry;
