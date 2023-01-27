items.forEach((i) => console.log(i));

let numberofOrderedItems = 0;

function createItems(item) {
  //itemWrapper
  const article = document.createElement('article');
  article.classList.add('item');

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

/* <div class="item">
                    <div class="item-image-favourites">
                        <div class="item-imagecontainer"><img src="img/item1.png" alt=""></div>
                        <div class="add-to-favourites" id="addToFavourites"><svg width="20" height="19"
                                viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                                    fill="black" />
                            </svg></div>
                    </div>
                    <h2 class="item-title">iPhone 11 PRO Max</h2>
                    <div class="item-info">
                        <p> <span id="qtyInStock">0</span> left in stock</p>
                    </div>
                    <div class="item-info">
                        <p>Price: <span class="bold" id="itemPrice">1000</span> $</p>
                    </div>
                    <button class="addtocart-button">Add to cart</button>

                    <div class="stats-container">
                        <span class="stats-heart">
                            <img src="img/like_filled 1.png" alt="">
                        </span>
                        <div class="stats-text">
                            <div class="stats-text-review">


                                <div> <span class="bold" id="percentPositiveReviews"> 95% </span>Positive
                                    reviews </div>
                                <div id="reviewRate">Above avarage</div>
                            </div>
                            <div> <span class="bold" id="numberOfOrders">1,327</span> <br> <span>orders</span></div>
                        </div>
                    </div>

                </div> */
