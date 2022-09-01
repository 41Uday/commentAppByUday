// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, timer, deleteComment, isToggleLiked} = props
  const {name, commentSearch, id, isLiked, bgColor} = commentDetails

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const toggleIsLiked = () => {
    isToggleLiked(id)
  }

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const nameOfClass = isLiked ? 'text' : ''

  return (
    <li>
      <div className="o-card">
        <div className="item-card-1">
          <p className={`res-par-1 ${bgColor}`}>{name[0].toUpperCase()}</p>
          <p className="name-1">{name}</p>
          <p className="time-1">{timer}</p>
        </div>
        <p>{commentSearch}</p>
        <div className="item-l-card">
          <div>
            <img src={likeImageUrl} alt="like" className="item-img-1" />
            <button
              type="button"
              className={`item-butt-1 ${nameOfClass}`}
              onClick={toggleIsLiked}
            >
              Like
            </button>
          </div>
          <button
            type="button"
            className="item-butt-2"
            onClick={onDeleteComment}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              className="item-img-1"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr className="hr-2" />
    </li>
  )
}

export default CommentItem
