import User from './users';
import InfoUser from './InforUser';

User.hasOne(InfoUser, {
    foreignKey: 'userId',
    as: 'infoUser'
  });
  InfoUser.belongsTo(User, {
    foreignKey: 'userId',
    as: 'userInfo'
  });
  