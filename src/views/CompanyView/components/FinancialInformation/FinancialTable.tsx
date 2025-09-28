import React from 'react';
import clsx from 'clsx';

interface Props {
  title: string;
  subTitle?: string;
  headers: string[];
  data: (string | number)[][];
}

const FinancialTable = ({ title, subTitle, headers, data }: Props) => {
  return (
    <div>
      <div className="mb-15 text-center">
        <p className="font-extrabold text-2xl mb-1.5">{title}</p>
        {subTitle && <p className="font-medium text-base">{subTitle}</p>}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-t border-b border-gray">
          <thead className="bg-[#ebebeb] border-b border-gray">
            <tr className="divide-x divide-gray">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className={clsx(
                    'whitespace-nowrap px-6 py-8 text-center text-xl font-bold uppercase w-1/4',
                    'last:text-primary',
                  )}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="divide-x divide-gray">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={clsx(
                      'whitespace-nowrap px-6 py-8 text-xl font-bold uppercase text-right w-1/4',
                      'first:text-center',
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialTable;
