const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/pages", { 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true
// }, () => { 
//   console.log('connected to database myDb ;)') 
// })

const conn = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})