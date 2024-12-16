import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [open, setOpen] = useState(null); // Only one open at a time

  const toggleFAQ = index => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I sign up as a tutor?",
      answer: "Signing up as a tutor is easy! Simply visit our 'Become a Tutor' page and create an account. You'll be asked to provide information about your qualifications, experience, and the subjects you can tutor. Once your profile is approved, you'll be able to connect with students seeking help in your areas of expertise."
    },
    {
      question: "Is there a verification process for tutors?",
      answer: "While we don't conduct individual background checks, tutors create detailed profiles outlining their qualifications and experience. Students can also leave reviews after working with a tutor, which helps build trust and transparency on the platform."
    },
    {
      question: "How do I find a tutor for my needs?",
      answer: "Finding a tutor is simple! Use our search bar to specify the subject you need help with and your preferred location (online or in-person). You'll see a list of qualified tutors matching your criteria. Browse their profiles, read reviews from other students (if available), and contact them directly to discuss your needs."
    },
    {
      question: "Is this website really free?",
      answer: "Absolutely! We believe everyone deserves access to quality education, so our website is completely free for both tutors and students to sign up, connect, and use the platform."
    }
  ];

  return (
    <div className='faq'>
      <div className="faq-heading">
        <h1>Any Questions? Answered!</h1>
        <p>Learning Never Stops, Neither Do We: FAQ's at Your Fingertips</p>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className={`faq-item ${open === index ? 'open' : ''}`} key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
            </div>
            {open === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
