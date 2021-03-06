module.exports = function (sequelize, dataTypes) {
    let alias = 'Comment';
    let cols = {
        id_comment: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        content: {
            type: dataTypes.STRING
        },
        id_user: {
            type: dataTypes.INTEGER
        },
        id_product: {
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
        tableName: 'comments',
        underscored: true,
        timestamps: true
    }

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function (models) {
        Comment.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'id_product'
        });

        Comment.belongsTo(models.User, {
            as: 'author',
            foreignKey: 'id_user'
        })
    }

    return Comment;
}