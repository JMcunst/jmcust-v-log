const YearComponent = () => {
  const marginTop = "400px"; // home.png 이미지 높이에 따라 조정

  return (
    <div className="flex flex-col space-y-48 mt-10 p-6" style={{ marginTop }}>
      {["2022", "2023", "2024", "2025", "2026", "2027"].map((year) => (
        <span key={year} className="text-center text-xl">
          {year}
        </span>
      ))}
    </div>
  );
};

export default YearComponent;
