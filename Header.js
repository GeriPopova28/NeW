
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo-link">
          <Image
            src="/assets/images/logo/cbes-logo.svg"
            alt="CBES LTD Logo"
            width={85}
            height={85}
            className="logo-img"
          />
        </Link>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#machines">Machines</a>
          <a href="#software">Software</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
