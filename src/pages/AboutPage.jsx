import {Link} from 'react-router-dom'
import Card from "../components/shared/Card";

function AboutPage() {
return (
    <Card>
        <div className="about">
            <h1>about this project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda sunt nam.</p>
            <p>version 1.0.0</p>
            <p>
                <Link to='/'>Back to Home</Link>
            </p>
        </div>
    </Card>
)   
}
export default AboutPage
