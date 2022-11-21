const { response, request } = require('express');

const usersGet = (req = request, res = response) => {
    const { q, nombre = 'No name', apikey} = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const usersPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const usersPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usersPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersDelete,
    usersPost,
    usersPatch
}