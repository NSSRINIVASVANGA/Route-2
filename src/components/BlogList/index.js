import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {detailsList} = props
  return (
    <ul className="items-con">
      {detailsList.map(eachItem => (
        <BlogItem details={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}
export default BlogList
