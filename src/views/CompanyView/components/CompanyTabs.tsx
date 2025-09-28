'use client';

import React, { useState } from 'react';
import CompanyHistory from '@/views/CompanyView/components/CompanyHistory/CompanyHistory';
import FinancialInformation from '@/views/CompanyView/components/FinancialInformation/FinancialInformation';
import BoardOperation from '@/views/CompanyView/components/BoardOperation/BoardOperation';

export const tabs = [
  {
    label: '연혁',
    key: 'history',
    content: <CompanyHistory />,
  },
  {
    label: '재무정보',
    key: 'financial_info',
    content: <FinancialInformation />,
  },
  {
    label: '이사회 운영현황',
    key: 'board',
    content: <BoardOperation />,
  },
] as const;

export type TabKey = (typeof tabs)[number]['key'];

interface Props {
  defaultTab?: TabKey;
}

const CompanyTabs = ({ defaultTab = 'history' }: Props) => {
  const [tabSelected, setTabSelected] = useState<TabKey>(defaultTab);

  const activeTab = tabs.find((tab) => tab.key === tabSelected);

  return (
    <div>
      <div className="max-w-content flex md:mb-32 mb-20">
        {tabs.map(({ key, label }) => {
          const active = key === tabSelected;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setTabSelected(key)}
              className={`flex-1 px-4 py-2 cursor-pointer font-semibold transition-colors ${
                active
                  ? 'bg-primary text-white font-extrabold md:text-28 text-xl'
                  : 'border border-gray3 font-medium md:text-2.5xl text-xl hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {activeTab?.content ?? null}
    </div>
  );
};

export default CompanyTabs;
