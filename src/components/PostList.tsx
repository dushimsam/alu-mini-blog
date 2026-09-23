import { posts } from '../data/posts'
import Post from './Post'
import { withLogger } from '../hoc/withLogger'
import '../styles/PostList.css'

// Posts by this author get the highlighted background (conditional styling).
const FEATURED_AUTHOR = 'Samuel Dushimimana'

function PostList() {
  return (
    <section className="post-list">
      <h1 className="post-list__heading">Latest posts</h1>

      <div className="post-list__grid">
        {posts.map((post) => (
          <Post key={post.id} post={post} featuredAuthor={FEATURED_AUTHOR} />
        ))}
      </div>
    </section>
  )
}

export default withLogger(PostList, 'PostList')
