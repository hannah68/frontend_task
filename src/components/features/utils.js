export const getUniqueOptions = (data, key) => {
  if (!Array.isArray(data)) {
    return [];
  }

  const values = data.map(item => item[key]);
  const uniqueValues = [...new Set(values)];

  return uniqueValues.map(value => ({
    value: value,
    label: value,
  }));
};

export const formatDate = date => {
  const newdate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short", // Abbreviated month name (Nov)
    day: "numeric", // Day without leading zero
    year: "numeric", // Full year (2022)
  }).format(newdate);

  return formattedDate;
};
