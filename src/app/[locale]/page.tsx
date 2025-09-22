import React from 'react';
// import { getTranslations } from 'next-intl/server';
import HomePageView from '@/views/HomePageView/HomePageView';

export default async function HomePage() {
  // const t = await getTranslations('header');
  return <HomePageView />;
}
