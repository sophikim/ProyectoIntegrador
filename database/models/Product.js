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
        }, 
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'products',
        underscored: true , 
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User, {
             as: 'owner',
             foreignKey: 'id_user'
         });
        Product.hasMany(models.Comment, {
             as: 'comments',
             foreignKey: 'id_product'
         }) 
    } 

    return Product;
}