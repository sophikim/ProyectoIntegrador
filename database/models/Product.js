module.exports = function (sequelize, dataTypes){
    let alias = 'Product';
    let cols = {
        id_product: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER 
        },
        name: {
            type: dataTypes.STRING,
        },
        description: {
            type: dataTypes.STRING,
        },
        picture_product: {
            type: dataTypes.STRING
        },
        cant_comments: {
            type: dataTypes.INTEGER
        },
        id_user: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'products',
        underscored: true , 
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    return Product;
}