"use client";

import { useState } from "react";
import "./barContact.css";
import ChevronDown from "../Logos/ChevronDown";
import ContactForm from "./contactForm";

export default function BarContact() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitted, setisSubmitted] = useState(false);

  function handleContactForm() {
    if (showContactForm) {
      setShowContactForm(false);
    } else {
      setShowContactForm(true);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // try {
    //   const res = await fetch("../app/api/BarContactHandler", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       data,
    //     }),
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   });
    // } catch (error) {
    //   console.error("Error:", error);
    // }

    setShowContactForm(false);
  }

  return (
    <section id="barContactSection">
      <button
        aria-label="Kontaktformular öffnen"
        id="toggleBarContactButton"
        className="barContactButton barContactDisplayButton"
        type="button"
        onClick={handleContactForm}
      >
        <h3>Kontakt</h3>
        <ChevronDown rotate={showContactForm} />
      </button>
      {showContactForm && <ContactForm onSubmit={handleSubmit} />}
    </section>
  );
}
