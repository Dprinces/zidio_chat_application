const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());
router.use(express.json());

const messageRouter = require('../router/message');
router.use('./message', messageRouter);

module.exports = router;