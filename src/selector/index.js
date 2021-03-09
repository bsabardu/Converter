export const searchItem = (arr, search) => (
  arr.filter((item) => (item.name.toLowerCase().includes(search.toLowerCase())))
);
