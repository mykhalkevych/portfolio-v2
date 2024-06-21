import SubNavTitle from '@/components/ui/subnavtitle/SubNavTitle';

export default function ContactInfo() {
  return (
    <div className='contact-info'>
      <SubNavTitle title='contacts'></SubNavTitle>
      <div>
        <a href='mailto:github.com'> user@gmai.com </a>
      </div>
      <div>
        <a href='tel:+380678488888'>+380678488888</a>
      </div>
    </div>
  );
}
