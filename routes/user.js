const router = require("express").Router();
const userController = require('../controllers/userController');

router.post('/create/message', userController.user_create_post);

router.get('/message', userController.user_message_get);

module.exports = router;