import React from 'react';
import './privacypolicy.css';
import { Link } from 'react-router-dom';


const privacypolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        Welcome to our Privacy Policy. <br />Your privacy is critically important to us. This policy outlines how we collect, use, disclose, 
        and safeguard your information when you visit our website TUTOR TRACK and our services.
      </p>

      <h2>Collection of Data</h2>
      <p>
        We may collect and process the following data about you:<br /><br />

        Personal Identification Information: Name, email address, phone number, etc., when you voluntarily submit such information to us through forms on our website.<br /><br />
        Non-Personal Identification Information: Browser name, type of computer, technical information about your means of connection to our site, such as the operating system and the Internet service providers utilized, etc.<br /><br />
        Cookies and Tracking Technologies: Our website may use cookies and other tracking technologies to enhance user experience and gather information about how visitors use our site.
      </p>

      <h2>Usage of Data</h2>
      <p>
        How We Use Your Information <br />
        We use the information we collect in the following ways:<br /><br />

        To personalize user experience and respond better to your individual needs.<br />
        To improve our website based on the information and feedback we receive from you.<br />
        To process transactions and provide customer service.<br />
        To send periodic emails regarding your order or other products and services.<br /><br />
      </p>

      <h3>How We Protect Your Information</h3>
      <p>
        We adopt appropriate data collection, storage, and processing practices and security measures 
        to protect against unauthorized access, alteration, disclosure, or destruction of your personal 
        information, username, password, transaction information, and data stored on our site.
      </p>

      <h2>Sharing Your Personal Information</h2>
      <p>
        We do not sell, trade, or rent users' personal identification information to others. We may share generic 
        aggregated demographic information not linked to any personal identification information regarding visitors 
        and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
      </p>

      <h2>Your Consent</h2>
      <p>
        By using our website, you consent to our Privacy Policy.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We encourage you to periodically review this page for any changes.
        You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically and become aware of modifications.
      </p>
    </div>
  );
};

export default privacypolicy;
