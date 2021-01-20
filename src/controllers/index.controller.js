const controller = {}

const title = 'INDEX DESDE EL SERVIDOR CON PUG y con variable'
controller.index = (req, res) =>{
    /** la raiz del render es la carpeta views */
    res.render('index', {title: title})
}

module.exports = controller;