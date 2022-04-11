const user = {
    id: "1", username: "lescanoa@udesa.edu.ar", password: "computadora1", birthdate: 2000, DNI: 11223344, profilePhoto: "/images/users/default-image.png"
}

const products = [
    {name: "Cepillo", description: "Un cepillo de bamboo.", pictureProduct:""},
    {name: "Aceite de Almendras", description: "Aceite con propiedades rejuvenecedoras.", pictureProduct:'/images/products/AceiteDeAlmendrasOrganico.png'},
    {name: "Balsamo Labial", description: "Hidrate sus labios cuiando al medio ambiente.", pictureProduct:""},
    {name: "Esponja Vegetal", description: "Tiene una vida util larga sin involucrar procesos que contaminen nuestra querida tierra.", pictureProduct:""},
    {name: "Jabón Solido", description: "Jabón no liquido. Formulado con aceites vegetales puras.", pictureProduct:""},
    {name: "Pata de dientes", description: "Regula el PH de la boca. No contine fluor, ni ingredientes tóxicos. Cuida a los pinguinos, mientras cuidas tu dientes.", pictureProduct:""},
    {name: "Peine de madera", description: "Piene de madera elaborado con madera de paraíso. No generan frizz.", pictureProduct:""},
    {name: "Repelente de insectos", description: "Off vegano. Reune los aramos de varias de las plantas más utilizadas para repeler insectos.", pictureProduct:""},
    {name: "Serúm Facial", description: "Combina los aceites más aclamados en el mundo de la cosmetica natural. Tiene propiedades nutrtivas y regeneradoras.", pictureProduct:""},
    {name: "Shampoo Solido", description: "Shapoo no liquido. Forma más amigable de lavar tu cabello. Formulada con ingredientes que limpian suavemente y aportan brillo.", pictureProduct:""}
];

const comments = [];

module.exports = {
    user,
    products,
    comments
}
