import app from './app'

const main = () => {
    app.listen(app.get('PORT'))
    console.log(`Servidor corriendo en el puerto ${app.get('PORT')}`)
}

main()