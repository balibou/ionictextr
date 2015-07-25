Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'pageNotFound',
    yieldTemplates: {
        nav: {to: 'nav'},
        footer: {to: 'footer'},
    },
    waitOn: function() { 
      return [Meteor.subscribe("onlusers"), Meteor.subscribe("chatrooms"), Meteor.subscribe("messages")]
    }
});

Router.map(function() {
    this.route('home', {
        path: '/',
    });

    this.route('chat');
    this.route('/chatroom/:_id',{
      name:'chatroom',
      data: function () { return ChatRooms.findOne(this.params._id);}
    });
});

Router.plugin('ensureSignedIn', {
  only: ['chat']
});
