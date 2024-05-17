import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li>
      <div className="top">
        <h1 className="head"> {title} </h1>
        <p className="date"> {publishedDate} </p>
      </div>
      <p className="desc"> {description} </p>
    </li>
  )
}

export default BlogItem
