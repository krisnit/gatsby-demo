import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout'

const indexPage = () => {
    return ( <>
            <Layout>
            
            <h2>I am Radhakrishnan, full stack developer having 10 years of experience</h2>
            <p>Need a developer? <Link to="/contact">Contact me</Link> </p>
            </Layout>
           </> );
}
 
export default indexPage;


