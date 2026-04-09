
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return <div className='body'>
    <h1>About Us</h1>
    <User/>
    <UserClass name={"Shivam Singh"} location={"Dehradun"}/>
    </div>
}

export default About
