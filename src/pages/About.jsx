import Card from "../components/shared/Card"
import { Link } from "react-router-dom"
function About() {
  return (
    <Card>
        <h2>About</h2>
        <p>this is a practice app</p>
        <p>Version: 6.9.9</p>
        <p>
        <Link to="/">Home</Link>
        </p>
    </Card>
  )
}

export default About