const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */
function getMovieTitles(title) {
  return getPages(title)
    .then(pages => {
      const urls = [];
      
      for(let i = 1; i <= pages; i++) {
        const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${i}`;
        urls.push(url);
      }

      return Promise.all(urls.map(url => getPage(url)));

    }).then(data => {
      const allTitles = data.reduce((all, titles) => [...all, ...titles]);
      allTitles.sort();
      
      for (let i = 0; i < allTitles.length; i++) {
        console.log(allTitles[i]);
      }

    });
}

const getPages = title => {
  return new Promise((resolve, reject) => {
    const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        const parsed = JSON.parse(data);
        resolve(parsed.total_pages);
      });

    }).on('error', (e) => {
      console.error(e);
    });
  });
};

const getPage = url => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        const parsed = JSON.parse(data);
        const titles = parsed.data.map(movie => movie.Title);
        resolve(titles);
      });

    }).on('error', (e) => {
      console.error(e);
    });
  });
};

async function main () {
  const result = await getMovieTitles('spiderman');
  console.log(result);
}

main();