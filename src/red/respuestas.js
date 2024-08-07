

exports.success = function (req, res, mensaje= '', status= 200) {
    res.status(status).send({
        errror: false,
        status: status,
        body: mensaje
    });
}

exports.errror = function (req, res, mensaje= 'Error interno', status = 500) {
    res.status(status).send({
        errror: true,
        status: status,
        body: mensaje
    });
}