
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
          <Image
            width={85}
            height={85}
          />
        <nav className="nav">
          <a href="#about">За хотела</a>
          <a href="#machines">Стаи</a>
          <a href="#software">Удобства</a>
          <a href="#team">Team</a>
          <a href="#contact">Контакти</a>
        </nav>
      </div>
    </header>
  );
}
