import React from 'react';
import BoardOperationTable from '@/views/CompanyView/components/BoardOperation/BoardOperationTable';
import HeadingSection from '@/components/HeadingSection/HeadingSection';
import Tabs from '@/components/Tabs/Tabs';

const tabs = [
  {
    label: '이사회 운영현황',
    content: <BoardOperationTable />,
  },
  {
    label: '주주총회 운영현황',
    content: <BoardOperationTable />,
  },
];

const BoardOperation = () => {
  return (
    <div className={'max-w-content'}>
      <HeadingSection title={'이사회 운영현황'} />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default BoardOperation;
