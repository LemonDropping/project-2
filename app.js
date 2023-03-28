const express = require('express');

const app = express();
const port = process.env.PORT || 3002
const exhbs = require('express-handlebars');



app.engine('hbs', exhbs({extreme: 'hbs', defaultLayout: 'layouts', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');


app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('main', {layout: 'home'})
});
app.listen(port, () => console.log(`App listening to port ${port}`));