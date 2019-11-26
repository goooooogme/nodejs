const index = require('./routes/home');
const courses = require('./routes/courses');
const add = require('./routes/add');


const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use('/',index);
app.use('/courses', courses);
app.use('/add',add);


const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server run in port ${PORT}`)
})