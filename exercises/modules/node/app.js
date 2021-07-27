const app = require("./api")

 const showPostsForCurrentUser = (userId, cb) => {
  app.getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return 
        post.title+
        post.body+
        post.createdBy
    })
    cb(postTemplates)
  })
}

const showUserProfile = (userId, cb) => {
  app.getUserById(userId, user => {
    const profile = 
      user.name
    cb(user)
  })
}

module.exports = {
    showPostsForCurrentUser,
    showUserProfile
}
