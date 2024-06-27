import SubNavTitle from '@/components/ui/subnavtitle/SubNavTitle';
import { RiPhoneFill, RiMailFill, RiExternalLinkLine } from '@remixicon/react';

export default function ContactInfo() {
  return (
    <div className='contact-info'>
      <SubNavTitle title='contacts'></SubNavTitle>
      <div>
        <a href='mailto:github.com'>
          <RiMailFill />
          user@gmail.com
        </a>
      </div>
      <div>
        <a href='tel:+380678488888'>
          <RiPhoneFill />
          +380678488888
        </a>
      </div>
      <div className='additional-contacts'>
        <SubNavTitle title='find-me-also-in'></SubNavTitle>
        <div>
          <a href='mailto:github.com'>
            <RiExternalLinkLine />
            discord account
          </a>
        </div>
      </div>
    </div>
  );
}
