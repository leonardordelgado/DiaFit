import AppStart from "./App";

let port = process.env.PORT || 3050;

AppStart.app.listen(port, ()=>{
    AppStart._db.TestDb()
    console.log(`Servidor rodando na porta ${port} `)
});
