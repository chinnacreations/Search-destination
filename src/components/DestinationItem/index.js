import './index.css'

const DestinationItem = props => {
  const {DestinationLists} = props
  const {imgUrl, name} = DestinationLists

  return (
    <li className="img-con">
      <img className="img" src={imgUrl} alt={name} />
      <p className="heading">{name}</p>
    </li>
  )
}

export default DestinationItem
