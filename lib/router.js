Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'pageNotFound',
    yieldTemplates: {
        nav: {to: 'nav'},
        footer: {to: 'footer'},
    },
    waitOn: function() { 
      return Meteor.subscribe("onlusers")
    }
});

Router.map(function() {
    this.route('home', {
        path: '/',
    });

    this.route('chat');
});

Router.plugin('ensureSignedIn', {
  only: ['chat']
});
