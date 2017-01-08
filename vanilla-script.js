//vanilla javascript version

//img source data
let imgArr = ["http://www.quotesforbros.com/wp-content/uploads/2015/08/simple-explanation-Einstein-Quotes.png","https://twistedsifter.files.wordpress.com/2012/03/salvador-dali-famous-quote-perfection-art-creativity1.jpg?w=800&h=399","http://www.ddesignerr.com/wp-content/uploads/2013/08/Famous-Quotes-of-Famous-People-9-630x404.jpg","http://i957.photobucket.com/albums/ae53/Aksyvakins/Photo%20Quotes%20Of%20Great%20People/inspirational_quotes_of_famous_people_640_07.jpg","http://www.rhemaquotes.nl/wp-content/uploads/2015/04/Your%20last%20day-Steve%20Jobs%20.jpg", "http://cdn.wonderfulengineering.com/wp-content/uploads/2016/03/famous-quotes-2.jpg", "https://s-media-cache-ak0.pinimg.com/236x/55/2e/53/552e5305e0cfefb764d181a5677006ff.jpg", "http://4.bp.blogspot.com/-nc_R7ybPZbY/VXZPg9EuvDI/AAAAAAAABYc/gjuE-9MyLts/s1600/quote_andrew_carnegie2.JPG", "http://twistedsifter.files.wordpress.com/2012/11/ralph-waldo-emerson-quote-every-artist-was-an-amateur.jpg?w=800&h=380","https://s-media-cache-ak0.pinimg.com/236x/74/e9/68/74e968375ea9ca6b9fa3df8698f72127.jpg", "https://s-media-cache-ak0.pinimg.com/236x/a8/e5/75/a8e5754d1b6627b30045cffb83c11dfe.jpg", "http://4.bp.blogspot.com/-yQ5FYITF5jg/T3w1IRhgpwI/AAAAAAAG34A/jrC5-gxmwCE/s1600/famous+success+quotes+(1).jpg", "http://4.bp.blogspot.com/-jvj5hCy4jYA/VZK5TBH3PqI/AAAAAAAAI24/obRwK-cCr9o/s1600/famous%2Bquotes%2Bof%2Bhistorical%2Bpeople%2B%25284%2529.jpg", "https://s-media-cache-ak0.pinimg.com/736x/d8/4d/29/d84d2902831c1649df219e55f8e8b521.jpg", "http://www.loveoflifequotes.com/wp-content/uploads/2013/12/Muhammad-Ali-quote-on-courage.jpg", "http://www.azquotes.com/picture-quotes/quote-the-principle-of-divine-purpose-stares-the-biologist-in-the-face-wherever-he-looks-the-ernst-boris-chain-81-15-44.jpg"];

//holds images that have already been chosen
let chosen = [];

//event handler when user requests a quote
function pickQuote() {
  if(imgArr.length > 0) {
   var randomImg =  imgArr[Math.floor(Math.random()*imgArr.length)];
   chosen.push(imgArr.splice(imgArr.indexOf(randomImg),1));
   document.querySelector('#quoteImg').src = randomImg;
  } else {
    imgArr = chosen;
    chosen = [];
    pickQuote(); //recursive call to start choosing from full list again
  }
}

//event configuration
document.querySelector('#sendQuote').addEventListener('click', pickQuote);
