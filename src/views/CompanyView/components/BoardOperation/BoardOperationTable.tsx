import React from 'react';
import { FiDownload } from 'react-icons/fi';

const BoardOperationTable = () => {
  return (
    <div>
      <div className="overflow-x-auto text-[#333333]">
        <table className="min-w-full">
          <thead className="bg-[#F4F4F4]">
            <tr>
              <th className="px-10 py-10 text-left text-lg font-medium uppercase w-2/12 rounded-l-lg">
                NO.
              </th>
              <th className="px-10 py-10 text-left text-lg font-medium uppercase w-4/12">
                이사회 내용
              </th>
              <th className="px-10 py-10 text-left text-lg font-medium uppercase w-3/12">등록일</th>
              <th className="px-10 py-10 text-center text-lg font-medium uppercase w-3/12 rounded-r-lg">
                첨부파일
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray3">
            <tr>
              <td className="px-10 py-10 whitespace-nowrap font-medium text-lg w-2/12">nnnnn</td>
              <td className="px-10 py-10 whitespace-nowrap font-medium text-lg w-4/12">
                25년 2분기 이사회 운영현황
              </td>
              <td className="px-10 py-10 whitespace-nowrap font-medium text-gray w-3/12">
                YYYY-MM-DD
              </td>
              <td className="px-10 py-10 whitespace-nowrap font-medium text-lg w-3/12">
                <div className={'flex justify-center'}>
                  <button
                    className={
                      'border border-gray3 rounded-full min-w-[140px] h-[50px] px-6 flex items-center justify-between'
                    }
                  >
                    <p className={'font-bold text-sm'}>다운로드</p>
                    <FiDownload size={16} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoardOperationTable;
