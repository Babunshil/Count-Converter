export function logic(system, number) {

  if (system === 'tex') {
    return [(number * 9.100).toFixed(3), number];
  }
  if (system === 'denier') {
    return [number, number * 0.1];
  }

  return null;

}

export function systemValue() {
  return (['Tex', 'Denier', 'Grist', 'English', 'Woollen', 'Linen', 'Worsted', 'Dewsbury', 'Decitex', 'Metric',])
}