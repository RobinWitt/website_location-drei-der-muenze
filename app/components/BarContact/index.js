"use client";

import "./barContact.css";
import { useState } from "react";
import ChevronDown from "../Logos/ChevronDown";
import ContactForm from "./contactForm";
import barContactHandler from "@/app/lib/barContactHandler";

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

    //barContactHandler(data);
    // e.target.reset();
    //setShowContactForm(false);
    setisSubmitted(true);
  }

  return (
    <section className="barContactSection">
      <button
        aria-label="Kontaktformular öffnen"
        id="toggleBarContactButton"
        className="barContactButton barContactDisplayButton"
        type="button"
        onClick={handleContactForm}
      >
        Kontakt
        <ChevronDown rotate={showContactForm} />
      </button>
      {showContactForm && (
        <ContactForm onSubmit={handleSubmit} isSubmitted={isSubmitted} />
      )}
    </section>
  );
}
