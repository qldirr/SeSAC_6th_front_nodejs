const VisitorModel = (sequelize, DataTypes) => {
    const Visitor = sequelize.define('Visitor', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT('medium'),
        allowNull: true,
      },
    }, {
      freezeTableName: true,
      timestamps : false
    });
    return Visitor;
  };
  
  module.exports = VisitorModel;



