const { users } = require("../controller/user");
const { jwtVerify } = require("../helpers/jwthelper");



function authorization(req, res, next) {
    try {
        let user = jwtVerify(req.headers.authorization);
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}


module.exports = {
    authorization
}