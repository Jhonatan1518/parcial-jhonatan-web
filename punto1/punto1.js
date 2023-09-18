function findHighestNumber(arr) {
    let highest = null;
    const uniqueNumbers = new Set();
  
    for (const num of arr) {
      if (!uniqueNumbers.has(num)) {
        uniqueNumbers.add(num);
        if (highest === null || num > highest) {
          highest = num;
        }
      }
    }
  
    return highest;
  }
  
  const myArray = [2, 5, 13, 67, 34, 23, 5, 2, 23]; //Añadir el Array de Ejmplo o Prueba
  const highestNumber = findHighestNumber(myArray);
  
  console.log(highestNumber);
  
  
  
  
  
  
  