exports.middleware = (req, res, next) => {
    if(req.body.cliente) {
        console.log()
        console.log(`Objeto postado ${req.body.cliente}`)
    }
    next()
}

exports.middlewareGlobal = (req, res, next) => {
    console.log()
    console.log('Middleware global')
    next()
}