import { posts } from '../data/posts'
import Post from './Post'
import { withLogger } from '../hoc/withLogger'
import '../styles/PostList.css'

// Posts by this author get the highlighted background (conditional styling).
const FEATURED_AUTHOR = 'Samuel Dushimimana'

function PostList() {
  return (
    <section className="post-list">
      <p className="post-list__eyebrow">Cloud notes</p>
      <h1 className="post-list__heading">Latest from the team</h1>
      <p className="post-list__subtitle">
        Quick tips and lessons learned running things in the cloud.
      </p>

      <div className="post-list__grid">
        {posts.map((post, index) => (
          <Post
            key={post.id}
            post={post}
            index={index}
            featuredAuthor={FEATURED_AUTHOR}
          />
        ))}
      </div>
    </section>
  )
}

export default withLogger(PostList, 'PostList')
