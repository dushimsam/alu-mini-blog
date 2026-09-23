import { memo } from 'react'
import type { Post as PostType } from '../types/post'
import { formatDate, isRecent, preview } from '../utils/date'
import { NewBadge } from './NewBadge'
import '../styles/Post.css'

interface PostProps {
  post: PostType
  index: number
  featuredAuthor?: string
}

function Post({ post, index, featuredAuthor }: PostProps) {
  const isFeatured = post.author === featuredAuthor
  const isNew = isRecent(post.datePosted)

  return (
    <article
      className="post"
      style={isFeatured ? { borderLeft: '3px solid var(--rust)', paddingLeft: '1.25rem' } : undefined}
    >
      <span className="post__index">{String(index + 1).padStart(2, '0')}</span>

      <div className="post__body">
        <h2 className="post__title">
          {post.title}
          {isNew && <NewBadge>New</NewBadge>}
        </h2>

        <p className="post__meta">
          {post.author}
          {isFeatured && <span className="post__tag">Editor</span>}
          <span className="post__dot">·</span>
          {formatDate(post.datePosted)}
        </p>

        <p className="post__preview">{preview(post.content)}</p>
      </div>
    </article>
  )
}

// Memoized so a card only re-renders when its own props change.
export default memo(Post)
