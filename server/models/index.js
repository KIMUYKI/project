const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');
const Post = require('./post');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.User = User;
db.Comment = Comment;
db.Post = Post;

// User.initiate(sequelize);
// Comment.initiate(sequelize);
// Post.initiate(sequelize);

// User.associate(db);
// Comment.associate(db);
// Post.initiate(db);

module.exports = db;
