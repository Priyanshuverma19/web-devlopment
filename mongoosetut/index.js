var mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

var kittySchema = new mongoose.Schema({
    name: String
  });
  var Kitten = mongoose.model('Kitten', kittySchema);

  var priyanshuKitty = new Kitten({ name: 'priyanshuKitty' });
console.log(priyanshuKitty.name);