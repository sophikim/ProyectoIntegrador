const user = {
    id: "1", username: "lescanoa@udesa.edu.ar", password: "computadora1", birthdate: 2000, DNI: 11223344, profilePhoto: "/images/users/default-image.png"
}

const products = [
    {name: "Aceite de Almendras", description: "Aceite con propiedades rejuvenecedoras.", pictureProduct:'/images/products/AceiteDeAlmendrasOrganico.png', cantComments: 5},
    {name: "Bálsamo Labial", description: "Hidrate sus labios cuidando al medio ambiente.", pictureProduct:'/images/products/BalsamoLabial.png', cantComments: 2},
    {name: "Jabón Sólido", description: "Jabón no líquido. Formulado con aceites vegetales puras.", pictureProduct:'/images/products/JabonSolido.png', cantComments: 10},
    {name: "Pasta de dientes", description: "Regula el PH de la boca. No contiene flúor, ni ingredientes tóxicos. Cuida a los pingüinos, mientras cuidas tu dientes.", pictureProduct:'/images/products/PastaDental.png', cantComments: 6},
    {name: "Repelente", description: "Off vegano. Reúne los aromas de varias de las plantas más utilizadas para repeler insectos.", pictureProduct:'/images/products/RepelenteDeInsectos.png', cantComments: 8},
    {name: "Serum Facial", description: "Combina los aceites más aclamados en el mundo de la cosmética natural. Tiene propiedades nutritivas y regeneradoras.", pictureProduct:'/images/products/SerumFacialRegenerador.png', cantComments: 7},
    {name: "Shampoo Solido", description: "Shampoo no líquido. Forma más amigable de lavar tu cabello. Formulado con ingredientes que limpian suavemente y aportan brillo.", pictureProduct:'/images/products/ShampooSolido.png', cantComments: 3},
    {name: "Protector Solar", description: "Crema bloqueadora que hidrata, nutre y protege de los rayos del sol. Hecha por aceites puros", pictureProduct:'/images/products/protectorSolar.png', cantComments: 6},
    {name: "Jabonera de madera", description: "Están hechas con madera de guatambú, palo blanco y protegidas con aceites vegetales. Para que puedas dejar tu shampoo, acondicionador y jabón respirar y secarse bien hasta el próximo uso.", pictureProduct:'/images/products/jaboneraMadera.png', cantComments: 12},
    {name: "Cepillo de dientes de bamboo", description: "Un cepillo de bamboo.", pictureProduct:'/images/products/Cepillo.png', cantComments: 10},
    {name: "Esponja Vegetal desmaquillante", description: "Tiene una vida útil larga sin involucrar procesos que contaminen nuestra querida tierra.", pictureProduct:'/images/products/EsponjaVegetal.png', cantComments: 12},
    {name: "Peine de madera", description: "Piene de madera elaborado con madera de paraíso. No generan frizz.", pictureProduct:'/images/products/PeineMadera.png', cantComments: 7}
];

const comments = [
    {user: "jorgegomez@gmail.com", comment: "Muy buen producto", pictureProfile: "/images/users/default-image.png", rating: 3},
    {user: "mirandaLopez@gmail.com", comment: "Un asco", pictureProfile: "/images/users/default-image.png", rating: 1},
    {user: "emiliano1@gmail.com", comment: "Mucho plástico", pictureProfile: "/images/users/default-image.png", rating: 2},
    {user: "selena@gmail.com", comment: "Me encanto!", pictureProfile: "/images/users/default-image.png", rating: 5},
    {user: "justinBieber@gmail.com", comment: "A mi novio le gustó", pictureProfile: "/images/users/default-image.png", rating: 4},
    {user: "camila485@gmail.com", comment: "Un poco caro", pictureProfile: "/images/users/default-image.png", rating: 3},
    {user: "marianaM7@gmail.com", comment: "Mata al planeta!", pictureProfile: "/images/users/default-image.png", rating: 1},
    {user: "pedroRobert@gmail.com", comment: "Buenisimo", pictureProfile: "/images/users/default-image.png", rating: 5},
    {user: "mirandalover@gmail.com", comment: "Quiero más!", pictureProfile: "/images/users/default-image.png", rating: 4},
    {user: "anaMaria@gmail.com", comment: "Prefiero no lavarme el pelo", pictureProfile: "/images/users/default-image.png", rating: 2},
    {user: "lucianoRivera@gmail.com", comment: "Me muero antes de pagar estos precios", pictureProfile: "/images/users/default-image.png", rating: 1},
    {user: "luciaDirectioner@gmail.com", comment: "Huele muy rico!", pictureProfile: "/images/users/default-image.png", rating: 5},
    {user: "gonzaloGimenez@gmail.com", comment: "Me deja las piernas muy suaves", pictureProfile: "/images/users/default-image.png", rating: 4},
    {user: "pabloPancho@gmail.com", comment: "safa", pictureProfile: "/images/users/default-image.png", rating: 2},
];

module.exports = {
    user,
    products,
    comments
}
