import styled from 'styled-components'

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 40px 20px;
  text-align: center;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  input, textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #0070f3;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
`

export default function Contact() {
  return (
    <ContactSection>
      <h2>Contact Us</h2>
      <p>We'd love to hear from you.</p>
      <ContactForm>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </ContactForm>
    </ContactSection>
  )
}
