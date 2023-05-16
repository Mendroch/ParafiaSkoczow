import axios from 'axios';

const sortData = (data) => {
  return data[0] ? data.sort((a, b) => a.name.localeCompare(b.name)) : data;
};

export const getData = async (queries, dispatch, setError) => {
  const values = Object.values(queries);
  const keys = Object.keys(queries);
  const promises = values.map((link) => axios.get(link));

  try {
    const res = await Promise.all(promises);
    res.forEach((data, index) => {
      dispatch({
        field: keys[index],
        value: sortData(data.data),
      });
    });
  } catch {
    setError(`Błąd połączenia z internetem`);
  }
};
