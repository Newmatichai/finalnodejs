const express = require("express");
const router = express.Router();

const {listAction, removeAction, formAction, saveAction} = require('./controller.js');

router.get('/', listAction);
router.get('/delete/:id', removeAction);
router.get('/form/:id?', formAction);
router.post('/save', saveAction);

module.exports = router ;