import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['blog-post'],
  commentingEnabled: false,

  comments: Ember.computed.alias('post.comments'),
  commentsCount: Ember.computed.alias('comments.length'),
  hasComments: Ember.computed('commentsCount', function() {
    return this.get('commentsCount') > 0;
  }),

  actions: {
    destroyPost(post) {
      this.sendAction('destroyPost', post);
    },
    createComment(comment) {
      let post = this.get('post');
      comment.set('post', post);

      this.sendAction('createComment', comment);
    },
    updateComment(comment) {
      this.sendAction('updateComment', comment);
    }
  }
});
