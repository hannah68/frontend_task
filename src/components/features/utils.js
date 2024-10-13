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
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(newdate);

  return formattedDate;
};
