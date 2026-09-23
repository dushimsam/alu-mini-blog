import { memo } from 'react'
import type { Post as PostType } from '../types/post'
import { formatDate, isRecent, preview } from '../utils/date'
import { NewBadge } from './NewBadge'
import '../styles/Post.css'

interface PostProps {
  post: PostType
  featuredAuthor?: string
}

function Post({ post, featuredAuthor }: PostProps) {
  const isFeatured = post.author === featuredAuthor
  const isNew = isRecent(post.datePosted)

  return (
    <article
      className="post"
      style={isFeatured ? { background: '#eef2ff', borderColor: '#c7d2fe' } : undefined}
    >
      <h2 className="post__title">
        {post.title}
        {isNew && <NewBadge>New!</NewBadge>}
      </h2>

      <p className="post__meta">
        By <span className="post__author">{post.author}</span> · {formatDate(post.datePosted)}
      </p>

      <p className="post__preview">{preview(post.content)}</p>
    </article>
  )
}

// Memoized so a card only re-renders when its own props change.
export default memo(Post)
