import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }
yurutyuuu fu fusytyugfg
  return <main className="page-pad inner-page contact-page"><div className="page-intro"><p className="eyebrow">04 — Contact</p><h1>Have something <em>in mind?</em></h1><p className="page-lede">Tell me a little about what you&apos;re working on. I&apos;ll get back to you within a few days.</p></div><div className="contact-layout"><form className="contact-form" onSubmit={handleSubmit}><label>Name<input type="text" name="name" placeholder="Your name" required /></label><label>Email<input type="email" name="email" placeholder="you@example.com" required /></label><label>Tell me about it<textarea name="message" placeholder="A few words about the project..." rows="5" required /></label><button className="submit-button" type="submit">{submitted ? 'Message sent ✓' : 'Send inquiry ↗'}</button></form><aside className="contact-aside"><p className="section-label">Elsewhere</p><a href="mailto:hello@mikael.studio">hello@mikael.studio ↗</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><div className="availability"><span className="status-dot" />Currently booking for Q2 2026</div></aside></div></main>


export default Contact
