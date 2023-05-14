import "./openingHours.css";

export default function OpeningHours({ openingHours }) {
  return (
    <section className="openhours_section">
      <h3 className="openhours_heading">Öffnungszeiten</h3>
      <span className="openhours_span">{openingHours}</span>
    </section>
  );
}
