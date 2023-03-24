const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const userRoute = require('./controllers/api/user-route')


const app = express();
const PORT = process.env.PORT || 3001;



const sess = {
    secret: "Keep this hidden",
    cookie: {
        maxAge: 60 * 60 *1000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
resave: false,
saveUninitialized: true,
store: new SequelizeStore({
    db: sequelize,
}),
};

app.use(express.static(path.join(__dirname, 'public')));
console.log("Public folder path: ", path.join(__dirname, 'public'));



app.use(session(sess));

app.use('/api/users', userRoute);
``
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.set('layoutsDir', path.join(__dirname, 'views', 'layouts'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => 
        console.log(
            `\nServer running on port ${PORT}. Visit http://localhost:${PORT}`)
    );
});