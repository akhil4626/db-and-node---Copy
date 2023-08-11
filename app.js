// const express = require('express');
// const cors = require('cors');
// const app = express();
// const bodyParser = require('body-parser');
// const path = require('path');
// const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library

// const secretKey = 'your_secret_key_here';
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json({ limit: '1mb' }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Middleware to check authentication token
// const authenticateToken = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     // return res.status(401).json({ error: 'Unauthorized: No token provided' });
//     return next();
//   }

//   jwt.verify(token.split(' ')[1], secretKey, (err, user) => {
//     if (err) {
//       // return res.status(403).json({ error: 'Forbidden: Invalid token' });
//       return next()
//     }
//     req.user = user; // Store the user data from the token in the request object
//     next();
//   });
// };

// app.post('/post', authenticateToken, (req, res, next) => {
//   const { names, email, PhoneNumber, Address } = req.body;

//   createInCrud(names, email, PhoneNumber, Address, (result) => {
//     console.log(result);
//     res.json({ success: true, message: 'Item Added successfully', names, email, PhoneNumber, Address });
//   });
// });

// app.post('/update', authenticateToken, (req, res, next) => {
//   const { id, names, email, PhoneNumber, Address } = req.body;

//   updateInCrud(id, names, email, PhoneNumber, Address, (result) => {
//     console.log(result);
//     res.json({ success: true, message: 'Item deleted successfully',  id, names, email, PhoneNumber, Address });
//   });
// });

// app.post('/delete',authenticateToken, (req, res, next) => {
//   const { id } = req.body;

//   deleteInCrud(id, (result) => {
//     console.log(result);
//     res.json({ success: true, message: 'Item deleted successfully', id });
//   });
// });

// app.get('/api/search', authenticateToken, (req, res, next) => {
//   readFromCrud((result) => {
//     res.json(result);
//   });
// });

// app.listen(3000, () => {
//   console.log("The server is running on port 3000");
// });













const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { createInCrud, updateInCrud, deleteInCrud, readFromCrud } = require('./db');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '1mb' })); // Use bodyParser to parse JSON data

app.use(express.static(path.join(__dirname, 'public')));

app.post('/post', (req, res, next) => {
  const { names, email, PhoneNumber, Address } = req.body;

  createInCrud(names, email, PhoneNumber, Address, (result) => {
    console.log(result);
    res.json({ success: true, message: 'Item Added successfully', names, email, PhoneNumber, Address });
  });
});

app.post('/update', (req, res, next) => {
  const { id, names, email, PhoneNumber, Address } = req.body;

  updateInCrud(id, names, email, PhoneNumber, Address, (result) => {
    console.log(result);
    res.json({ success: true, message: 'Item deleted successfully',  id, names, email, PhoneNumber, Address });
  });
});

app.post('/delete', (req, res, next) => {
  const { id } = req.body;

  deleteInCrud(id, (result) => {
    console.log(result);
    res.json({ success: true, message: 'Item deleted successfully', id });
  });
});

app.get('/api/search', (req, res, next) => {
  readFromCrud((result) => {
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});




// // const express = require('express');
// // const cors = require('cors');
// // const app = express();
// // const bodyParser = require('body-parser');
// // const path = require('path');
// // const { createInCrud, updateInCrud, deleteInCrud, readFromCrud } = require('./db');

// // app.use(cors());
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json({ limit: '1mb' })); // Use bodyParser to parse JSON data

// // app.use(express.static(path.join(__dirname, 'public')));

// // app.post('/post', (req, res, next) => {
// //   const {  names, email,PhoneNumber,Address } = req.body; // Destructure id, names, email from the JSON body

// //   createInCrud(names, email,PhoneNumber,Address, (result) => {
// //     console.log(result);
// //     res.json({ success: true, message: 'Item Added successfully',"names": names, "email":email, "PhoneNumber":PhoneNumber, "Address":Address });

// //   });
// // });

// // app.post('/update', (req, res, next) => {
// //   const { id, names, email,PhoneNumber,Address } = req.body; // Destructure id, names, email from the JSON body

// //   updateInCrud(id, names, email, PhoneNumber,Address, (result) => {
// //     console.log(result);
// //     res.json({"id":id, "names": names, "email":email, "PhoneNumber":PhoneNumber, "Address":Address});
// //   });
// // });

// // app.post('/delete', (req, res, next) => {
// //   const { id } = req.body; // Destructure id from the JSON body
// // console.log(id)
// //   deleteInCrud(id, (result) => {
// //     console.log(result);
// //     res.json({ success: true, message: 'Item deleted successfully', id: id });
// //   });
// // });

// // app.get('/api/search', (req, res, next) => {
// //   readFromCrud((result) => {
// //     res.json(result);
// //   });
// // });

// // app.listen(3000, () => {
// //   console.log("The server is running on port 3000");
// // });





