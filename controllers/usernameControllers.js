/*Ponst { username } = require('../../models')
const { Op } = require("sequelize")

class UsernameController {
    getUser = (req, res) => {
        const name = req.query.name
        let whereCondition
        if (name) {
            whereCondition = {
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            }
        }
        Username.findAll(whereCondition)
        .then(user => {
            res.result(user)
        })
    }

    getDetailuser = (req, res) => {
        Username.findOne({
            where: { id: req.params.id }
        })
        .then(user => {
            res.result(user)
        })
    }

    insertUser = (req, res) => {
        Username.create({
            username: req.body.username,
            password: req.body.password
        }).then(user => {
            res.result(user)
        }) .catch(err => {
            res.status(422).json("Can't create user")
        })
    }

    updateUser = (req, res) => {
        Username.update({
            username: req.body.username,
            password: req.body.password
        }, {
        where: { id: req.params.id }
        })
        .then(user => {
            Usernames.findOne({
                where: { id: req.params.id }
            })
            .then(user => {
                res.result(user)
            })
        }) .catch(err => {
            res.status(422).json("Can't update user")
        })
    }

    deleteUser = (req, res) => {
        Usernames.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.result({})
        })
    }
}

module.exports = UsernameController

*/
