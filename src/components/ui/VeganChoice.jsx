

export const VeganChoice = ({ healthLabels }) => {
  const veganLabels = healthLabels.filter(
    (label) => label.toLowerCase() === 'vegan' || label.toLowerCase() === 'vegetarian'
  );

  return (
    <p>
      <strong>Health Choice:</strong> {veganLabels.length > 0 ? veganLabels.join(', ') : 'N/A'}
    </p>
  );
};


