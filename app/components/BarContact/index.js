"use client";

import { useState } from "react";
import "./barContact.css";

export default function BarContact() {
  const [openContactForm, setOpenContactForm] = useState(false);

  function handleContactForm() {
    if (openContactForm) {
      setOpenContactForm(false);
    } else {
      setOpenContactForm(true);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("../app/api/BarContactHandler", {
        method: "POST",
        body: JSON.stringify({
          data,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section id="barContactSection">
      <button
        aria-label="Kontaktformular öffnen"
        id="toggleBarContactButton"
        className="barContactButton"
        type="button"
        onClick={handleContactForm}
      >
        <h3>Kontakt</h3>
      </button>
      {openContactForm && (
        <form
          aria-label="Gib eine Nachricht an uns ein"
          className="barContactForm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="subjectInput">Betreff</label>
          <input id="subjectInput" name="subject" type="text" required />
          <label htmlFor="contentTextarea">Inhalt</label>
          <textarea
            id="contentTextarea"
            name="content"
            rows={4}
            cols={50}
            required
          ></textarea>
          <label htmlFor="emailInput">Email-Adresse</label>
          <input id="emailInput" name="email" type="email" required />
          <div className="checkbox_container">
            <input
              id="dataConsentCheckbox"
              name="dataConsent"
              type="checkbox"
              required
            />
            <label htmlFor="dataConsentCheckbox">
              Ich erlaube den Inhabern der Seite meine Kontaktdaten zum Zweck
              der Kontaktaufnahme im Zusammenhang mit meiner Nachricht zu
              verwenden.
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
      )}
    </section>
  );
}
