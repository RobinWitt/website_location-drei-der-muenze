"use client";

import { useState } from "react";
import "./barContact.css";
import ChevronDown from "../Logos/ChevronDown";
import ContactForm from "./contactForm";
import barContactHandler from "@/app/lib/barContactHandler";
import testMail from "@/app/lib/testMail";

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

    //testMail();
    //barContactHandler(data);
    // e.target.reset();
    //setShowContactForm(false);
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
