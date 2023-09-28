function getTextColorForBg(rgbColor) {
  // Convierte el color RGB en un arreglo de valores numéricos
  const rgbArray = rgbColor.match(/\d+/g).map(Number);
  // Calcula la luminosidad según la fórmula W3C
  const luminosity =
    (0.299 * rgbArray[0] + 0.587 * rgbArray[1] + 0.114 * rgbArray[2]) / 255;
  // Determina el color de texto basado en la luminosidad
  return luminosity > 0.5 ? "#000" : "#fff";
}

export default getTextColorForBg;
