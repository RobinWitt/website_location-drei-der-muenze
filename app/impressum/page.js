import { imprintData } from "../data/Imprint";
import "./imprint.css";

export default function Impressum() {
  return (
    <main>
      <article className="imprint_article">
        <h2>Impressum</h2>
        <table>
          <tbody>
            {imprintData.map(({ id, data }) => {
              return (
                <tr key={id}>
                  <td>{data}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </main>
  );
}
