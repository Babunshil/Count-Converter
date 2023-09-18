export function logic(system, number) {

  if (system === 'tex') {
    return [(number * 9.100).toFixed(3), number, (number * 0.028).toFixed(3), (number * 590).toFixed(3), (number * 1940).toFixed(3), (number * 1650).toFixed(3), (number * 886).toFixed(3), (number * 3100).toFixed(3), (number * 10).toFixed(3), (number * 1000).toFixed(3)];
  }
  if (system === 'denier') {
    return [number, number * 0.1];
  }

  return null;

}

export function systemValue() {
  return (['Tex', 'Denier', 'Grist', 'English', 'Woollen', 'Linen', 'Worsted', 'Dewsbury', 'Decitex', 'Metric',])
}

// , (number * 0.028).toFixed(3), (number * 590).toFixed(3), (number * 1940).toFixed(3), (number * 1650).toFixed(3), (number * 886).toFixed(3), (number * 3100).toFixed(3), (number * 10).toFixed(3), (number * 1000).toFixed(3)