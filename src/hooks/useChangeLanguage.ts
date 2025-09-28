import { usePathname, useRouter } from 'next/navigation';

const useChangeLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: string) => {
    router.replace(`/${newLang}${pathname.replace(/^\/(en|ko)/, '')}`);
  };

  return {
    switchLanguage,
  };
};

export default useChangeLanguage;
