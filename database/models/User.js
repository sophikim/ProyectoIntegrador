module.exports = function (sequelize, dataTypes){
    let alias = 'User';
    let cols = {
        id_user: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER 
        },
        username: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        birthdate: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        profile_photo: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'users',
        underscored: true,
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_user'
        });
        User.hasMany(models.Comment, {
        as: 'usersComments',
        foreignKey: 'id_user'
        }) //estab última pehuen no la tiene no entiendo porque, porque encesitas las dos 
    }


    return User;
}