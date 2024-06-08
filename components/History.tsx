// components/HistoryComponent.js
import React from "react";

interface HistoryComponentProps {
  category: string;
  lastYear: string; // 'lastYear'가 연도를 문자열로 처리
  height: string; // CSS 스타일 값, 예: '100px', '50vh' 등
}

const HistoryComponent: React.FC<HistoryComponentProps> = ({ category, lastYear, height }) => {
    const years = ['2022', '2023', '2024', '2025', '2026', '2027'];
  
    return (
      <div className="relative w-full h-full px-10 pb-10" style={{ backgroundImage: "url('/images/ground.png')", backgroundSize: 'cover', backgroundPosition: 'center', height }}>
        {years.map((year, index) => {
          if (year <= lastYear) {
            const isLastYear = year === lastYear;
            const diggedImage = isLastYear ? "/images/digged_last.png" : "/images/digged_full.png";
            return (
              <div key={year} className="relative" style={{ zIndex: isLastYear ? 2 : 1 }}>
                <img src={diggedImage} alt="Digged background" className="w-full" />
                {isLastYear && (
                  <img src="/images/worker_down.png" alt="Worker" className="absolute bottom-0" style={{ zIndex: 3, transform: 'translateY(10%) translateX(20%)' }} />
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