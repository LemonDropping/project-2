const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const authRouteApi = require('./controllers/api/authRoute')
const indexController = require('./controllers/api/homeRoutes')


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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));

app.use('/api/auth', authRouteApi);

const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => 
        console.log(
            `\nServer running on port ${PORT}. Visit http://localhost:${PORT}`)
    );
});