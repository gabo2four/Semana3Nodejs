// Esto va a actuar como si fuera una base de local
// en verdad es un array de objetos

import { index } from "../user/controller";

const stories = [
  {
    id: 1,
    name: "Harry Potter",
    author: "J.K. Rowling",
    image:
      "https://phantom-marca.unidadeditorial.es/70cdeb1501a33c2c567dabbebc270ddd/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/17/16371568440299.jpg",
    description:
      "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles (non-magical people) worldwide.",
  },
];
/**
 * 
 Vamos a enviarle al cliente el siguiente
 en res podemos el statis res.status(200).json()
  {
    ok: // true || false esto va a indicar y si la peticion es success o error
    data: // Sera el cuerpo de nuestra respuesta esto va a tener un mensaje con los datos o un mensaje de error
  }
 */

// Listar
// METHOD: GET
export const list = (req, res) => {
  // lista los stories

  return res.status(200).json({
    ok: true,
    data: stories,
  });
};

// Crear
// METHOD: POST
export const store = (req, res) => {
  // crea un story
  // note: Recurden que el estado de creacion es 201
  const body = req.body;
  body.id = stories.length + 1;
  stories.push(body);

  return res.status(201).json({
    ok: true,
    data: "Store Success",
  });
};

// Editar
// METHOD: PUT
export const update = (req, res) => {
  // edita un story
  const filtroId = stories.filter(function(i){
    return req.params.id == i.id
  })
  filtroId[0].name = req.body.name
  filtroId[0].author = req.body.author
  filtroId[0].image = req.body.image
  filtroId[0].description = req.body.description
  return res.status(201).json({
    ok: true,
    data: "Update Success",
  });
};

// Eliminar
// METHOD: DELETE
export const destroy = (req, res) => {
  // elimina un story
  var indexe = null
  var elemento = null
  const filtroId= stories.filter(function(i){
    elemento = i
    return req.params.id == i.id
  })
  indexe = stories.indexOf(elemento);
  stories.splice(indexe)
  return res.status(200).json({
    ok: true,
    data: "Delete Success",
  });
};
