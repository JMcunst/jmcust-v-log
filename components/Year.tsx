const YearComponent = () => {
    return (
      <div className="flex flex-col space-y-10">
        {['2022', '2023', '2024', '2025', '2026', '2027'].map(year => (
          <span key={year} className="text-center text-xl">{year}</span>
        ))}
      </div>
    );
  };
  
  export default YearComponent;
  