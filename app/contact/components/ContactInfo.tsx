import SubNavTitle from '@/components/ui/subnavtitle/SubNavTitle';
import { RiPhoneFill, RiMailFill, RiExternalLinkLine } from '@remixicon/react';

export default function ContactInfo() {
  return (
    <div className='contact-info'>
      <SubNavTitle title='contacts'></SubNavTitle>
      <div>
        <a href='mailto:github.com'>
          <RiMailFill />
          nmykhalkevych@gmail.com
        </a>
      </div>
      <div>
        <a href='tel:+38067********'>
          <RiPhoneFill />
          +38067********
        </a>
      </div>
      <div className='additional-contacts'>
        <SubNavTitle title='find-me-also-in'></SubNavTitle>
        <div>
          <a href='https://discordapp.com/users/nazar542_09639'>
            <RiExternalLinkLine />
            discord account
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/nazar-mykhalkevych-00773813b/'>
            <RiExternalLinkLine />
            linkedin account
          </a>
        </div>
      </div>
    </div>
  );
}
