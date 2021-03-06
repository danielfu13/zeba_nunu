// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = proccess.env.PORT || 3001;

// // routes
// const apiRoutes = require('./routes')
// const htmlRoutes = require('./routes')

// app.use(express.static('public'));

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './Develop/public')));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

