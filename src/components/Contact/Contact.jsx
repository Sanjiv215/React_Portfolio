import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLocationDot } from "react-icons/fa6";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;
const hasEmailConfig = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY && CONTACT_EMAIL
);
const SUBMIT_COOLDOWN_MS = 30_000;

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const website = String(formData.get("website") || "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("Please fill in all fields before sending your message.");
      return;
    }

    if (website) {
      setStatus("Submission blocked.");
      return;
    }

    const [firstName, ...rest] = name.split(" ");
    const lastName = rest.join(" ");

    if (!hasEmailConfig) {
      setStatus("This form is temporarily unavailable. Please email me directly instead.");
      return;
    }

    const lastSubmitAt = Number(window.localStorage.getItem("contact-last-submit-at") || 0);
    const now = Date.now();

    if (now - lastSubmitAt < SUBMIT_COOLDOWN_MS) {
      setStatus("Please wait a few seconds before sending another message.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          first_name: firstName,
          last_name: lastName || "-",
          user_email: email,
          subject,
          user_message: message,
          from_name: name,
          reply_to: email,
          to_email: CONTACT_EMAIL
        },
        EMAILJS_PUBLIC_KEY
      );

      window.localStorage.setItem("contact-last-submit-at", String(now));
      setStatus("Message sent successfully. I’ll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again in a moment.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-shell">
        <div className="contact-copy">
          <p className="contact-kicker">Contact</p>
          <h2 className="contact-title">Let&apos;s Build Something Thoughtful</h2>
          <p className="contact-text">
            If you want to collaborate on a project, discuss frontend ideas, or just
            say hello, send a message here. I&apos;m always open to meaningful work and
            interesting conversations.
          </p>

          <div className="contact-points">
            <div className="contact-point">
              <span className="contact-icon"><FaEnvelope /></span>
              <div>
                <h3>Email</h3>
                {CONTACT_EMAIL ? (
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                ) : (
                  <p>Email configuration pending</p>
                )}
              </div>
            </div>

            <div className="contact-point">
              <span className="contact-icon"><FaGithub /></span>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/Sanjiv215" target="_blank" rel="noreferrer">
                  github.com/Sanjiv215
                </a>
              </div>
            </div>

            <div className="contact-point">
              <span className="contact-icon"><FaLocationDot /></span>
              <div>
                <h3>Location</h3>
                <p>Bangalore, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-card" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Your name" required />
          </div>

          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="you@example.com" required />
          </div>

          <div className="field-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" name="subject" placeholder="Project idea or message topic" required />
          </div>

          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me a little about your idea..."
              required
            />
          </div>

          <div className="field-group honeypot-field" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          <button type="submit" className="contact-submit" disabled={isSending || !hasEmailConfig}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status ? (
            <p className={`contact-status${!hasEmailConfig ? " contact-status-warning" : ""}`}>
              {status}
            </p>
          ) : !hasEmailConfig ? (
            <p className="contact-status contact-status-warning">
              Direct email is available at {CONTACT_EMAIL || "the address above"}.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default Contact;
