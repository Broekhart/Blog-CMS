import styles from '@/styles/dashboard/Navbar.module.css';
import Image from 'next/image';
import { FiLogOut, FiHome, FiUploadCloud, FiEdit } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { slug: '/', content: 'Vedi i post', icon: <FiHome /> },
  { slug: '/aggiungi-post', content: 'Aggiungi post', icon: <FiUploadCloud /> },
  { slug: '/modifica-post', content: 'Modifica post', icon: <FiEdit /> },
];

const Navbar = () => {
  const { asPath } = useRouter();
  return (
    <section className={`${styles.navbar} flex_column`}>
      <Image src='/logo.png' height={70} width={70} alt='logo' className={styles.image} />
      <div className='flex_column desktop' style={{ gap: '20px', alignSelf: 'stretch' }}>
        {links.map((link) => (
          <Link
            key={link.slug}
            href={link.slug}
            className={asPath === link.slug ? `button ${styles.active}` : 'button'}>
            {link.icon} {link.content}
          </Link>
        ))}
      </div>
      <div className='mobile flex' style={{ gap: '20px' }}>
        {links.map((link) => (
          <Link href={link.slug} key={link.slug} className={asPath === link.slug ? styles.active : ''}>
            {link.icon}
          </Link>
        ))}
      </div>
      <FiLogOut />
    </section>
  );
};

export default Navbar;
