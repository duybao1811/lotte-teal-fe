import React from 'react';
import CompanyView from '@/views/CompanyView/CompanyView';
import type { TabKey } from '@/views/CompanyView/components/CompanyTabs';

interface Props {
  params: Promise<{ subPage: TabKey }>;
}

export default async function CompanySubPage({ params }: Props) {
  const { subPage } = await params;
  return <CompanyView subPage={subPage} />;
}
