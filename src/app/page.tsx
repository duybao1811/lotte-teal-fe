import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/config';

export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
