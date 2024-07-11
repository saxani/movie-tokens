const timeFormatter = (rawTime) => {
  let minutes = rawTime % 60;
  let hours = Math.floor(rawTime / 60);

  if (hours >= 1) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${rawTime}m`;
  }
};

export { timeFormatter };
