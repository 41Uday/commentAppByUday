import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialContactList = []
// Write your code here
class Comments extends Component {
  state = {finalList: initialContactList, name: '', commentSearch: ''}

  isToggleLiked = id => {
    console.log('Toggle triggered', id)
    this.setState(prevState => ({
      finalList: prevState.finalList.map(e => {
        if (id === e.id) {
          return {...e, isLiked: !e.isLiked}
        }
        return e
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    console.log('Triggered')
    const ud = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const {name, commentSearch} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      commentSearch,
      isLiked: false,
      bgColor: initialContainerBackgroundClassNames[ud],
    }
    this.setState(prevState => ({
      finalList: [...prevState.finalList, newComment],
      name: '',
      commentSearch: '',
    }))
  }

  deleteComment = id => {
    const {finalList} = this.state
    console.log('delete Triggered')
    const resultList = finalList.filter(e => e.id !== id)
    this.setState({finalList: resultList})
  }

  onChangeNameSearch = event => {
    this.setState({name: event.target.value})
  }

  onChangeCommentSearch = event => {
    this.setState({commentSearch: event.target.value})
  }

  render() {
    const {finalList, name, commentSearch} = this.state
    console.log(formatDistanceToNow(new Date()))
    const timer = formatDistanceToNow(new Date())
    const len = finalList.length
    return (
      <div className="bg-container">
        <div className="f-card">
          <div className="card-1">
            <h1 className="head">Comments</h1>
            <p className="para-1">Say something about 4.0 technologies</p>
            <form className="form-container" onSubmit={this.onAddComment}>
              <input
                type="text"
                value={name}
                className="search-1"
                onChange={this.onChangeNameSearch}
                placeholder="Your Name"
              />
              <textarea
                rows="10"
                cols="40"
                value={commentSearch}
                className="comment-search"
                onChange={this.onChangeCommentSearch}
                placeholder="Your Comment"
              >
                {' '}
              </textarea>
              <button type="submit" className="butt">
                Add Comment
              </button>
            </form>
          </div>
          <div className="img-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="img-2"
              alt="comments"
            />
          </div>
        </div>
        <hr className="hr-1" />
        <div className="count-container">
          <div className="inside-card">
            <p className="par"> {len}</p>
            <p>Comments</p>
          </div>
          <ul className="list-container">
            {finalList.map(e => (
              <CommentItem
                key={e.id}
                commentDetails={e}
                timer={timer}
                deleteComment={this.deleteComment}
                isToggleLiked={this.isToggleLiked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
