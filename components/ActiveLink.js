import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ActiveLink({ href, children, className }) {
  const router = useRouter();
  const activeClass = router.pathname === href ? 'active' : '';

  return (
    <Link href={href} className={`${className} ${activeClass}`}>
      {children}
    </Link>
  );
}
