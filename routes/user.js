const { Router } = require('express');

const { usersGet, usersPut, usersPost, usersDelete, usersPatch } = require('../controllers/user');

const router = Router();

router.get('/', usersGet);

router.put('/:id', usersPut);

router.delete('/', usersDelete);

router.post('/', usersPost);

router.patch('/', usersPatch);

module.exports = router;