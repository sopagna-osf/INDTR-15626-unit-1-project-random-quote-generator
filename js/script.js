/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

'use strict';

var printQuoteInterval;
var intervalDuration = 20000;
var backgroundColors = ['#36b55c', '#005cb2', '#00675b'];
var quotes = [
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: 'Twitter',
    year: '2016',
  },
  {
    quote: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
    source: 'Winston S. Churchill',
    tags: ['business']
  },
  {
    quote: 'It is better to fail in originality than to succeed in imitation.',
    source: 'Herman Melville',
    tags: ['business']
  },
  {
    quote: 'The road to success and the road to failure are almost exactly the same.',
    source: 'Colin R. Davis',
    citation: 'Inc',
    year: '2014',
    tags: ['business']
  },
  {
    quote: 'A room without books is like a body without a soul.',
    source: 'Marcus Tullius Cicero',
    tags: ['book', 'soul']
  }
];

/**
 * Get random quote from given array
 * 
 * @param {Array} quotes
 * @returns {Object} Random quote
 */
function getRandomQuote(quotes) {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

/**
 * Get random background color from given array
 * 
 * @param {Array} colors
 * @returns {String} Background color
 */
function getRandomBackgroundColor(colors) {
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

/**
 * Set interval to change the random quote on webpage
 */
function setPrintQuoteInterval() {
  if (printQuoteInterval) {
    clearInterval(printQuoteInterval);
  }

  printQuoteInterval = setInterval(printQuote, intervalDuration);
}

/**
 * Display the random quote on the webpage
 */
function printQuote() {
  let quote = getRandomQuote(quotes);
  let backgroundColor = getRandomBackgroundColor(backgroundColors);
  let htmlContent = '<p class="quote">' + quote.quote + '</p>';
  htmlContent += '<p class="source">' + quote.source;

  if (quote.citation) {
    htmlContent += '<span class="citation">' + quote.citation + '</span>';
  }

  if (quote.year) {
    htmlContent += '<span class="year">' + quote.year + '</span>';
  }

  htmlContent += '</p>';

  if (quote.tags && quote.tags.length > 0) {
    htmlContent += '<p class="tags">' + quote.tags.join(', ') + '</p>';
  }

  document.getElementById('quote-box').innerHTML = htmlContent;
  document.querySelector('body').style.backgroundColor = backgroundColor;
  setPrintQuoteInterval();
}

printQuote();
setPrintQuoteInterval();
document.getElementById('loadQuote').addEventListener("click", printQuote, false);