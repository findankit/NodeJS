const { createJwt } = require("../helpers/jwthelper");
const db = require('../config/db');

let users = [];

function signup(req, res, next) {
    try {
        let body = req.body;
        // users.push(body);
        let query = `INSERT INTO user (username, password) values ('${body.username}', '${body.password}')`;

        db.query(query, function (err, data) {
            if (err) return next(err);

            res.json({
                message: 'User added successfully.',
                details: body
            });
        });

    } catch (error) {
        next(error);
    }
}



function login(req, res, next) {
    try {
        // user in payload
        let user = req.body;

        // get actual data from db .. 
        // let findUser = users.filter(el => el.email === user.email);
        let finduser = db.query(`SELECT * FROM user WHERE username = '${user.username}'`, function (err, data) {
            if(err) return next(err);

            try {
                let findUser = data[0];
    
                if (!findUser) throw new TypeError('No user found.');
    
                // password compare..
                let isPasswordMatch = user.password == findUser.password;
                if (!isPasswordMatch) throw new TypeError('Unauthorized.');

                // because find user is an instance of 
                let token = createJwt(JSON.parse(JSON.stringify(findUser)));
    
                res.status(200).json({
                    message: 'success',
                    data: {
                        usertoken: token
                    }
                });
            } catch (error) {
                next(error);
            }

        });

    } catch (error) {
        next(error);
    }
}


module.exports = {
    login,
    signup,
    users
};