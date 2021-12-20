import React from 'react';

const CategorySuggestion = ({ categories, choose }) => {
  if (categories)
    return categories.map((elm) => (
      <div key={Math.random()} className="delete-suggestion">
        <a
          href="#"
          onClick={(e) => {
            choose(e, elm.ten);
          }}
        >
          {elm.ten}
        </a>
      </div>
    ));
  return null;
};

export default CategorySuggestion;
