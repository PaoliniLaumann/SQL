const { options } = require("./options/mysql.js");
const knex = require("knex")(options);

/* Crea la tabla con los productos */
knex.schema
  .createTable("products", (table) => {
    table.increments("id"),
      table.string("name"),
      table.integer("price");
      table.string("thumbnail")
      
  })
  .then(() => {
    console.log("todo bien");
  })
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  })
  .finally(() => {
    knex.destroy();
  });  

/* Se insertan productos a la tabla*/
knex("products")
  .insert([
    {
      name: "bondiola",
      price: 1200,
      thumbnail:
        "https://www.liliana.com.ar/wp-content/uploads/2016/08/liliana_receta_bondiola-sal.jpg",
    },
    {
      name: "pizza",
      price: 1100,
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    },
    {
      name: "mila",
      price: 1000,
      thumbnail:
        "https://vinomanos.com/wp-content/uploads/2019/09/Milanesa-perfecta.jpg",
    },
    {
      name: "LOMO",
      price: 1200,
      thumbnail:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2017%2F03%2F19%2Flomo-de-cerdo-al-horno-2000.jpg&q=60",
    },
    {
      name: "hamburguesa",
      price: 1100,
      thumbnail:
        "https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg",
    },
    {
      name: "lomo completo",
      price: 1600,
      thumbnail:
        "https://www.clarin.com/img/2021/07/26/el-lomito-uno-de-los___u-aUfp64d_640x361__1.jpg",
    },
    {
      name: "Tostado",
      price: 1000,
      thumbnail:
        "https://media.diariouno.com.ar/p/92d297a8a5b04498d407c595b48982f0/adjuntos/298/imagenes/008/616/0008616976/receta-tostado-jamon-y-quesojpg.jpg",
    },
    {
      name: "Tallarines",
      price: 1450,
      thumbnail:
        "https://cdn.colombia.com/gastronomia/2011/08/24/tallarines-con-camarones-3682.jpg",
    },
  ])
  .then(() => {
    console.log(`Se insertaron los productos `);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });

/* leer todo el contenido de la tabla de productos */

/* knex
    .from("productos")
    .select("*")
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(() => {
        knex.destroy();
    })
 */

/* Delete */

/* knex
    .from("productos")
    .del()
    .then((res) => {
        console.log(`Todo se borro ${res}`);
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(() => {
        knex.destroy();
    }) */
