module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Post.associate = models => {
        Post.belongsTo(models.User, {
            onDelete: "cascade"
        });
    };

    return Post;
};
