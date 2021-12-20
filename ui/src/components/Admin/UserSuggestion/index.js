import React from 'react';

const UserSuggestion = ({ suggestions, handleSetInput }) => {
  if (suggestions)
    return suggestions.map((element) => (
      <div key={Math.random()} className="result">
        <a
          href="#"
          onClick={(e) => {
            handleSetInput(e, element.email);
          }}
        >
          {element.email}
        </a>
      </div>
    ));
  return null;
};

export default UserSuggestion;
