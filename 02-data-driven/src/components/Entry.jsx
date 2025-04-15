import Marker from "../assets/marker.png";
function Entry() {
  return (
    <article className="articleDiv">
      <img
        src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDIwNjJ8MHwxfGFsbHx8fHx8fHx8fDE3MjMyMzUwNjR8&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Japan Image"
        className="locationImg"
      />
      <div className="textSection">
        <div className="countryRow">
          <img src={Marker} alt="Location Marker" className="locationMarker" />
          <span className="cityName">JAPAN</span>
          <span className="mapsLink">
            <a href="google.com">View on Google Maps</a>
          </span>
        </div>
        <h1>Mount Fiji</h1>
        <h6>12 Jan, 2023 - 24 Jan, 2023</h6>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters{" "}
          <br />
          (12,380 feet). Mount Fuji is the single most popular tourist site in{" "}
          <br />
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
export default Entry;
