import React from 'react';

interface PaginationProps {
  current: number;
  total: number;
  onChange: (current: number) => void;
}

const Pagination = ({ current, total, onChange }: PaginationProps) => {
  return <div></div>;
};

export default Pagination;
