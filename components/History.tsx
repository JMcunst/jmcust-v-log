// components/HistoryComponent.js
import React from 'react';

const HistoryComponent = ({ category, lastYear, height }) => {
  const years = ['2022', '2023', '2024', '2025', '2026', '2027'];

  return (
    <div className="relative w-full h-full p-10" style={{ backgroundImage: "url('/images/ground.png')", backgroundSize: 'cover', backgroundPosition: 'center', height }}>
      {years.map((year, index) => {
        if (year <= lastYear) {
          const isLastYear = year === lastYear;
          const diggedImage = isLastYear ? "/images/digged_last.png" : "/images/digged_full.png";
          return (
            <div key={year} className="relative" style={{ zIndex: isLastYear ? 2 : 1 }}>
              <img src={diggedImage} alt="Digged background" className="w-full" />
              {isLastYear && (
                <img src="/images/worker_down.png" alt="Worker" className="absolute bottom-0" style={{ zIndex: 3, transform: 'translateY(10%) translateX(15%)' }} />
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default HistoryComponent;
