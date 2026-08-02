'use client';

import { usePathname } from 'next/navigation';

export default function MainContentShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <main
      className={`flex-grow w-full max-w-full overflow-x-hidden ${
        isAdmin 
          ? 'pt-0 h-screen max-h-screen overflow-hidden' 
          : 'pt-20 sm:pt-24 min-h-[100dvh]'
      }`}
    >
      {children}
    </main>
  );
}
