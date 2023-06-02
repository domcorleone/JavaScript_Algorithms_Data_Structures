const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Altere apenas o código abaixo desta linha | Original version
//const half = (stats) => (stats.max + stats.min) / 2.0; 
// version 2.0
/*const half = ({ max, min }) => {
  console.log(max, min);
  return (max + min) / 2.0;
}*/
//version 3.0
const half = ({ max, min }) => (max + min) / 2.0;

  // Altere apenas o código acima desta linha