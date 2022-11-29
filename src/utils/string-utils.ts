const toCamelCase = (gameName: string) => {
  return gameName
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

export { toCamelCase };
