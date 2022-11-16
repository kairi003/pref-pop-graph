import React from 'react';
import Copyright from 'components/atoms/Copyright';
import Mail from 'components/atoms/Mail';
import Link from 'components/atoms/Link';
import DescriptionList from 'components/atoms/DescriptionList';
import DescriptionItem from 'components/atoms/DescriptionItem';
import Contacts from 'components/atoms/Contacts';
import style from './Footer.module.css'

export type FooterProps = {publishYear: number, auther: string, repository: string, mail: string, className?: string, style?: React.CSSProperties};
const Footer: React.FC<FooterProps> = ({publishYear, auther, repository, mail, ...props}) => {
  const className = [props.className, style.Footer].join(' ');
  return <footer className={className}>
    <Contacts title="連絡先">
      <DescriptionList>
        <DescriptionItem title="Repository">
          <Link href={repository}/>
        </DescriptionItem>
        <DescriptionItem title="Mail">
          <Mail address={mail} />
        </DescriptionItem>
      </DescriptionList>
    </Contacts>
    <Copyright publishYear={publishYear} auther={auther} />
  </footer>
} 

export default Footer;
