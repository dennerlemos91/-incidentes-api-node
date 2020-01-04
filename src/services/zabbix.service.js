const fs = require('fs');
const csv = require('fast-csv');

exports.importar = file => {
  const stream = fs.createReadStream(file.arquivo.path);
  const streamCsv = csv
    .parse({
      headers: true,
      demiliter: ',',
      quote: '"'
    })
    .on('data', data => {
      console.log(data);
    });

  stream.pipe(streamCsv);
};
