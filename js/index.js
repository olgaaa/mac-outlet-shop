//HW8

items.forEach((i) => console.log(i));

let numberofOrderedItems = 0;

function createItems(item) {
  //itemWrapper
  const article = document.createElement('article');
  article.classList.add('item');
  article.onclick = () => {
    activeElem.classList.toggle('active');
  };

  // innerWrapper
  const itemImageFavourites = document.createElement('div');
  itemImageFavourites.classList.add('item-image-favourites');

  const itemImageContainer = document.createElement('div');
  itemImageContainer.classList.add('item-imagecontainer');
  itemImageContainer.style.backgroundImage = `url(${item.imgUrl})`;

  const addToFavourites = document.createElement('div');
  addToFavourites.classList = 'add-to-favourites';
  addToFavourites.style.backgroundImage = "url('img/heartFavourites.png')";

  //Title
  const h2 = document.createElement('h2');
  h2.classList.add('item-title');
  h2.textContent = item.name;

  const itemInfo = document.createElement('div');
  itemInfo.classList.add('item-info');

  const qtyInStock = document.createElement('div');
  qtyInStock.textContent = `${item.orderInfo.inStock} left in stock`;
  qtyInStock.classList.add('item-info');

  const itemPriceInfo = document.createElement('div');
  itemPriceInfo.classList.add('item-info');

  const priceLine = document.createElement('p');
  priceLine.textContent = 'Price: ';

  const itemPrice = document.createElement('span');
  itemPrice.classList.add('bold');
  itemPrice.textContent = item.price;

  const currency = document.createElement('span');
  currency.textContent = ' $';

  const addToCartButton = document.createElement('button');
  addToCartButton.classList.add('addtocart-button');
  addToCartButton.textContent = 'Add to cart';

  const statsContainer = document.createElement('div');
  statsContainer.classList.add('stats-container');

  const statsHeart = document.createElement('span');
  statsHeart.classList.add('stats-heart');
  statsHeart.style.backgroundImage = "url('img/like_filled1.png')";

  const statsText = document.createElement('div');
  statsText.classList.add('stats-text');

  const statsTextReview = document.createElement('div');
  statsTextReview.classList.add('stats-text-review');

  const reviewsPercent = document.createElement('div');

  const getPercent = document.createElement('span');
  getPercent.textContent = `${item.orderInfo.reviews}% `;
  getPercent.classList.add('bold');

  const positive = document.createElement('span');
  positive.textContent = 'Positive reviews';

  const reviewRate = document.createElement('div');
  reviewRate.textContent = 'Above avarage';

  const numberOfOrders = document.createElement('div');

  const getNumberOfOrders = document.createElement('span');
  getNumberOfOrders.classList.add('bold');
  getNumberOfOrders.textContent = numberofOrderedItems;

  const newLine = document.createElement('br');

  const ordersText = document.createElement('span');
  ordersText.textContent = 'orders';

  article.appendChild(itemImageFavourites);
  article.appendChild(h2);
  article.appendChild(itemInfo);
  article.appendChild(addToCartButton);
  article.appendChild(statsContainer);
  itemImageFavourites.appendChild(itemImageContainer);
  itemImageFavourites.appendChild(addToFavourites);
  itemInfo.appendChild(qtyInStock);
  itemInfo.appendChild(itemPriceInfo);
  itemPriceInfo.appendChild(priceLine);
  priceLine.appendChild(itemPrice);
  priceLine.appendChild(currency);
  statsContainer.appendChild(statsHeart);
  statsContainer.appendChild(statsText);
  statsText.appendChild(statsTextReview);
  statsTextReview.appendChild(reviewsPercent);
  statsTextReview.appendChild(reviewRate);
  reviewsPercent.appendChild(getPercent);
  reviewsPercent.appendChild(positive);
  statsText.appendChild(numberOfOrders);
  numberOfOrders.appendChild(getNumberOfOrders);
  numberOfOrders.appendChild(newLine);
  numberOfOrders.appendChild(ordersText);

  return article;
}

function appendContent(content) {
  const el = document.getElementById('content');
  el.appendChild(content);
}

function init(items) {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    fragment.appendChild(createItems(item));
  });
  appendContent(fragment);
}

init(items);
