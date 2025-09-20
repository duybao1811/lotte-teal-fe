import React from 'react';
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('header');
  return <h1>{t('title')}</h1>;
}
