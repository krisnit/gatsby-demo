import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/layout'

const About = () => {
    return ( 
        <Layout>
         <div>
        <h1>About Me</h1>
        <p>Here you can find the information about myself</p>
        <p>You can contact me <Link to="/contact">here</Link></p>
    </div>
    </Layout>);
}
 
export default About;