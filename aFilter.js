// Most filters I and you have used before could use improvements for 3 to 4+ digits of data.
// They either do not feature complex filters that are discriminate down to a singular, meaningful item, 
// and / or the code is unreadable if they manage to pull off the others.


const fs = require('fs');
const file = fs.readFileSync('fun.json');


const filterRules = (filter) => {
  const query = {};

  for (const key in filter) {
    if (Array.isArray(filter[key]) && filter[key].length > 0) {
      query[key] = filter[key];
    }
  }

  return query;
};

const filterData = (data, query) => {
  const filteredData = data.filter((item) => {
    for (const key in query) {
      if (!item[key] || !query[key].includes(item[key])) {
        return false;
      }
    }

    return true;
  });

  return filteredData;
};

let filter = {
    genre: [
        
    ],
    character: [
        'Mario',
        'DK',
    ],
    type: [
        'Game',
    ],
    reviews: [
        4.7,
    ],
};

const data = JSON.parse(file);
const query = filterRules(filter);

const result = filterData(data, query);
console.log(JSON.stringify(result))
