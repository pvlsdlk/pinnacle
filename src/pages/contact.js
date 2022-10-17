import React from 'react';
import ContactForum from '../components/Contact';
import { contactObjDiscover } from '../components/Contact/Data';

const ContactPage = () => {
  return (
    <>
      <ContactForum {...contactObjDiscover}/>
    </>
  )
}

export default ContactPage;