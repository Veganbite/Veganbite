import React from 'react';
import MealCard from './MealCard';

// An array of objects
const Cards = [
  {
    quote:
      "Receita",
    character: 'prato1',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/2/2017/04/carot-falafel_charlie-richards.cropped.jpg?webp=true&quality=45&crop=11px%2C3264px%2C4913px%2C2088px&resize=1880%2C799',
  },
  {
    quote: "Receita",
    character: 'prato2',
    image:
      'https://i2.wp.com/www.aceitosim.com.br/wp-content/uploads/2017/10/cardapio-de-casamento-vegetariano-ou-vegano.jpg?w=770&ssl=1',
  },
  {
    quote: "receita",
    character: 'prato3',
    image:
      'https://i0.wp.com/www.aceitosim.com.br/wp-content/uploads/2017/10/comida-vegetariana-vegana-casamento.jpg?w=770&ssl=1',
  },
];

const CardList = () => (
  <div>
    {Cards.map(item => (
      <MealCard
        quote={item.quote}
        image={item.image}
        character={item.character}
        key={item.character}
      />
    ))}
  </div>
);

export default CardList;