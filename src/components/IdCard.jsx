import './IdCard.styles.css'

export const IdCard = (props) => {
 const {array} = props

 const convertBool = (value) => {
  return value === true ? "Yes" : "No"
 }

 return(
  <>
    {array.map((content, index) => {
     return(
      <div key={`${content.birth} ${index}`} className="card">
       <img src={content.img} alt={`profile to ${content.firstName}`} />
       <ul>
        <li><b>&nbsp;First Name:</b> &nbsp;{content.firstName}</li>
        <li><b>&nbsp;Last Name:</b> &nbsp;{content.lastName}</li>
        <li><b>&nbsp;Country:</b> &nbsp;{content.country}</li>
        <li><b>&nbsp;Is Student:</b> &nbsp;{convertBool(content.isStudent)}</li>
       </ul>
      </div>
     )
    })}
  </>
 )
}