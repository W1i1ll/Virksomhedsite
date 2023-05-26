document.querySelectorAll('article').forEach(addIndex);
document.querySelectorAll('figure').forEach(addIndex);

function addIndex(item, index) {
   item.style.setProperty('--i', index + 1);
}

/*
articles.forEach( (article, index) => {
  article.style.setProperty('--i', index + 1);
  figures[index].style.setProperty('--i', index + 1);
})
*/
/*
for( let index=0; index < articles.length && index < figures.length; index++ ) {
  articles[index].style.setProperty('--i', index + 1);
  figures[index].style.setProperty('--i', index + 1);
}*/


/*
const addCustomProperties = items => {
  for (const [index, item] of items.entries()) {
    item.style.setProperty('--i', index + 1);
  }
}

addCustomProperties(articles);
addCustomProperties(figures);
*/