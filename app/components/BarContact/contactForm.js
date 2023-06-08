export default function ContactForm({ onSubmit, isSubmitted }) {
  if (isSubmitted) {
    return <p>Danke für deine Nachricht!</p>;
  }

  if (!isSubmitted) {
    return (
      <form
        aria-label="Gib eine Nachricht an uns ein"
        className="barContactForm"
        onSubmit={onSubmit}
      >
        <label htmlFor="subjectInput">Betreff</label>
        <input
          id="subjectInput"
          name="subject"
          type="text"
          maxLength={30}
          placeholder="30 Zeichen"
          pattern="^[A-Za-zÄÖÜäöüß0-9\s.-]+$"
          title="Erlaubt sind Buchstaben, Zahlen, Punkt und Bindestrich"
          required
        />
        <label htmlFor="contentTextarea">Inhalt</label>
        <textarea
          id="contentTextarea"
          name="content"
          rows={4}
          cols={50}
          maxLength={200}
          placeholder="200 Zeichen"
          pattern="^[A-Za-zÄÖÜäöüß0-9\s.-]+$"
          required
        ></textarea>
        <label htmlFor="emailInput">Email-Adresse</label>
        <input id="emailInput" name="email" type="email" required />
        <div className="checkbox_container">
          <input
            id="dataConsentCheckbox"
            name="dataConsent"
            type="checkbox"
            placeholder="name@beispiel.com"
            required
          />
          <label htmlFor="dataConsentCheckbox">
            Ich erlaube den Inhabern der Seite meine Kontaktdaten zum Zweck der
            Kontaktaufnahme im Zusammenhang mit meiner Nachricht zu verwenden.
          </label>
        </div>
        <button
          id="submitBarContactButton"
          className="barContactButton"
          type="submit"
        >
          Absenden
        </button>
      </form>
    );
  }
}
