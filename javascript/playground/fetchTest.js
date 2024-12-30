// const fetchData = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data); // Handle data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
  
//   fetchData();
  
const fetchDate = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data); //Handle data

  } catch(error) {
    console.error("Error fetching data", error)
  }
}

fetchDate()