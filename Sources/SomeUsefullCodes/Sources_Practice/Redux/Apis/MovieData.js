export const MovieData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonFile = await response.json();

    console.log('jsonFile...........................', jsonFile);

    return jsonFile;
  } catch (error) {
    console.log('Error from Api calling.............', error);
  }
};
