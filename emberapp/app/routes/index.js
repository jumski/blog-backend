import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.filter('post', {}, (post) => !post.get('isNew'));
  },
  setupController(controller, posts) {
    controller.set('posts', posts);

    this.createAndSetPost();
  },

  /*
   * Creates new 'post' record and sets it in controller as 'newPost'
   */
  createAndSetPost() {
    let newPost = this.store.createRecord('post', {});

    this.controller.set('newPost', newPost);
  },

  actions: {
    createPost(post) {
      post.save().then(this.createAndSetPost.bind(this));
    },

    destroyPost(post) {
      if (confirm(`Do you really want to destroy post ${post.title}?`)) {
        post.destroyRecord();
      }
    }
  }
});