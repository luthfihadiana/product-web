const fs = require('fs');
const path = require('path');

const categories = ["Electronics", "Clothing", "Home Appliances", "Books", "Sports", "Toys", "Groceries", "Automotive", "Health & Beauty", "Furniture"];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomNumber(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

function generateDummyItems(count) {
  const items = [];

  for (let i = 1; i <= count; i++) {
    const item = {
      id: i,
      name: `Product ${i}`,
      categories: [getRandomElement(categories), getRandomElement(categories)],
      image_url: `https://dummyimage.com/200x200/000/fff&text=Product+${i}`,
      price: parseFloat(generateRandomNumber(10, 500)),
      sold_number: parseFloat(generateRandomNumber(10, 100)),
      likes: parseFloat(generateRandomNumber(0,20)),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla risus, tristique a tempor sed, tempus at dolor."
    };

    // Ensure unique categories in the array
    item.categories = [...new Set(item.categories)];

    items.push(item);
  }

  return {
    products: items
  };
}

const dummyItems = generateDummyItems(15);

// Save the dummy data to a JSON file in the parent directory of the 'scripts' folder
const outputFilePath = path.join(__dirname, '../db.json');
fs.writeFileSync(outputFilePath, JSON.stringify(dummyItems, null, 2), 'utf-8');

console.log(`Dummy data saved to ${outputFilePath}`);
