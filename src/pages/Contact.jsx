
import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    console.log({
      name,
      email,
      message
    })

    setSubmitted(true)
    form.reset()
  }

  return (
    <main className="page-pad inner-page contact-page">

      <div className="page-intro">
        <p className="eyebrow">04 — Contact</p>

        <h1>
          Have something <em>in mind?</em>
        </h1>

        <p className="page-lede">
          Tell me a little about what you're working on.
          I'll get back to you within a few days.
        </p>
      </div>

      <div className="contact-layout">

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message">
            Tell me about it
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="A few words about the project..."
            rows="5"
            required
          />

          <button
            className="submit-button"
            type="submit"
          >
            Send inquiry ↗
          </button>

          {submitted && (
            <p className="success-message" role="status">
              Thank you! Your message has been submitted.
            </p>
          )}

        </form>

        <aside className="contact-aside">

          <p className="section-label">Elsewhere</p>

          <a href="mailto:hello@mikael.studio">
            hello@mikael.studio ↗
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <div className="availability">
            <span className="status-dot" />
            Currently available for projects
          </div>

        </aside>

      </div>

    </main>
  )
}

export 
.contact-page {
  background-color: #142D4E;
  color: #FFFFFF;
  min-height: 100vh;
}

.contact-page .page-lede {
  color: #CBD5E1;
}

.contact-page .contact-form label {
  color: #FFFFFF;
}

.contact-page .contact-form input,
.contact-page .contact-form textarea {
  background-color: #203D5E;
  color: #FFFFFF;
  border: 1px solid #49627E;
  border-radius: 8px;
  padding: 14px;
}

.contact-page .contact-form input::placeholder,
.contact-page .contact-form textarea::placeholder {
  color: #B0BDCC;
}

.contact-page .submit-button {
  background-color: #FFFFFF;
  color: #142D4E;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  cursor: pointer;
}

.contact-page .submit-button:hover {
  background-color: #CBD5E1;
}

.contact-page .contact-aside a {
  color: #FFFFFF;
}

.contact-page .availability {
  color: #CBD5E1;
}

.contact-page .success-message {
  color: #86EFAC;
}
 Contact
