// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import './Contact.css';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_z2zl5tl', 'template_34l4mjm', form.current, '9plJbR8TfWHk_OCuD')
//       .then((result) => {
//           console.log('SUCCESS!', result.text);
//           alert('Message sent successfully!');
//       }, (error) => {
//           console.log('FAILED...', error.text);
//           alert('Failed to send message, please try again.');
//       });
//   };

//   return (
//     <section id="contact" className="contact">
//       <h2>Contact Me</h2>
//       <form ref={form} onSubmit={sendEmail}>
//         <input type="text" name="user_name" placeholder="Name" required />
//         <input type="email" name="user_email" placeholder="Email" required />
//         <textarea name="message" placeholder="Message" required></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//       <div className="contact-links">
//         <a href="#" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-linkedin"></i>
//         </a>
//         <a href="#" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-github"></i>
//         </a>
//         <a href="#" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-twitter"></i>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Contact;
