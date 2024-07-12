// Helper function to get next 7 days dates

const dateFormatter = () => {
  let dates = ['Today'];
  let date = new Date();

  const options = {
    weekday: 'short',
    day: 'numeric',
  };

  for (let i = 0; i < 6; i++) {
    date.setDate(date.getDate() + 1);
    dates.push(date.toLocaleString('en-US', options));
  }

  return dates;
};

export { dateFormatter };
