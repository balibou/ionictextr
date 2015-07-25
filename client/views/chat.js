Template.chat.helpers({
  'onlusr':function(){
    return Meteor.users.find({ "status.online": true , _id: {$ne: Meteor.userId()} });
  }
});