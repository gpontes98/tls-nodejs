const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(path.resolve('src/views')));

router.get("/", (req, res) => {
    res.sendFile(path.resolve('src/views/index.html'));
});

module.exports = router;