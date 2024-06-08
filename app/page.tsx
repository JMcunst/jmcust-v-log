import Image from "next/image";
import React, { useMemo } from 'react';
import Header from '../components/Header';
import Category from '../components/Category';
import History from '../components/History';
import Year from '../components/Year';

export default function Home() {
  const categories = [
    { name: 'Flutter', lastYear: '2023' },
    { name: 'Nextjs', lastYear: '2022' },
    { name: 'Spring', lastYear: '2024' },
    { name: 'Solution Architect', lastYear: '2025' }
  ];

  const maxYear = useMemo(() => Math.max(...categories.map(c => parseInt(c.lastYear))), [categories]);
  const historyHeight = `${(maxYear - 2000 + 1) * 5}rem`;

  return (
    <div>
      <Header />
      <div className="flex">
        <Year />
        <div className="flex justify-between flex-grow">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center flex-grow">
              <Category category={category.name} />
              <History category={category.name} lastYear={category.lastYear} height={historyHeight} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
