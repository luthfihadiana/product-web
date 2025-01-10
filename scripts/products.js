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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla risus, tristique a tempor sed, tempus at dolor. Mauris sodales lacus sit amet scelerisque commodo. Vestibulum a nisi semper diam imperdiet posuere. Nullam sagittis sed nisi et tristique. Nulla suscipit porta ligula, ac convallis quam commodo nec. Aenean molestie erat eget enim eleifend, vitae accumsan libero interdum. Curabitur ullamcorper mollis nulla et lacinia. Vivamus dolor urna, semper eget aliquam ultricies, gravida sed sapien. Quisque id convallis turpis. Donec in augue eu enim laoreet efficitur. Morbi ornare, ex vitae facilisis laoreet, quam ex aliquam tortor, vitae semper erat sem id nibh. In nec sagittis felis, at fringilla augue. Nam quis quam in augue consequat posuere. Etiam dictum rutrum mi vestibulum pulvinar. Vestibulum quis posuere felis, eget mollis ex.Ut et quam convallis, tristique neque at, consectetur nulla. Mauris vitae mi diam. Aliquam mauris libero, suscipit quis condimentum eget, dignissim eget eros. Nam fermentum vestibulum lacus, nec vestibulum sem suscipit in. Aliquam scelerisque malesuada ultrices. Donec arcu enim, commodo vel dolor in, lacinia varius metus. Sed lacinia odio a sapien sodales blandit. Integer vel odio mollis, imperdiet lectus sit amet, facilisis mi. Curabitur quis ante eget ipsum hendrerit pharetra. Integer dignissim dolor ut magna commodo, vel pretium lorem vulputate. Ut suscipit ultricies libero. Curabitur quis tristique felis. Donec vestibulum hendrerit molestie."
    };

    // Ensure unique categories in the array
    item.categories = [...new Set(item.categories)];

    items.push(item);
  }

  return {
    products: items
  };
}

const dummyItems = generateDummyItems(20);

// Save the dummy data to a JSON file in the parent directory of the 'scripts' folder
const outputFilePath = path.join(__dirname, '../db.json');
fs.writeFileSync(outputFilePath, JSON.stringify(dummyItems, null, 2), 'utf-8');

console.log(`Dummy data saved to ${outputFilePath}`);
