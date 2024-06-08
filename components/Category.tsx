import React from 'react';

interface CategoryComponentProps {
  category: string; // category의 타입을 string으로 선언
}

const CategoryComponent: React.FC<CategoryComponentProps> = ({ category }) => {
  return (
    <div className="text-center mt-5">
      <h2 className="text-lg font-semibold">{category}</h2>
      <img src={`/images/home.png`} alt={`${category} Home`} className="mx-auto w-48 h-48" style={{ zIndex: 3, transform: 'translateY(15%)' }} />
    </div>
  );
};

export default CategoryComponent;