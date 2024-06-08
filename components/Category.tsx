const CategoryComponent = ({ category }) => {
    return (
      <div className="text-center mt-5">
        <img src={`/images/home.png`} alt={`${category} Home`} className="mx-auto" />
        <h2 className="text-lg font-semibold">{category}</h2>
      </div>
    );
  };
  
  export default CategoryComponent;
  