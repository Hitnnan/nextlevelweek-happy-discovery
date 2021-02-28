const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db =>{
    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.6975402",
        lng: "-46.5592202",
        name: "Associação São Luiz",
        about:
          "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "55999992222",
        images: [
          "https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
          "https://images.unsplash.com/photo-1594575111057-47b35c5f98f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions:
          "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas: 8h às 18h",
        open_on_weekends: "1",
      });
    // Consultar dados da tabela
    const selectedOrhpanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrhpanages)
    // // Consultar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)
    // //  Deletar dado da tabela
    // console.log(await db.run('DELETE FROM orphanage WHERE id = "4"'))
    // console.log(await db.run('DELETE FROM orphanage WHERE id = "5"'))
})