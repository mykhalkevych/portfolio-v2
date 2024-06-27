import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

import './contact.css';

export default function Page() {
  return (
    <div className='contact-page'>
      <ContactInfo></ContactInfo>
      <div className='contact-form'>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}
