const React = require('react');
const Layout = require('./components/Layout.jsx');

class About extends React.Component {
    render() {
        return(
            <Layout 
            title="About"
            stylesheet="/css/style.css"
            >
            <body>
                <h1>This is the page in which we discuss things about plants.</h1>
                <h1>Plants usually grow.</h1>
                <h1>Plants are sometimes edible.</h1>
                <h1>Plants are sometimes inedible.</h1>
                <h1>Plants are sometimes evil.</h1>
                <h1>Plants and sunlight are often good friends.</h1>
                
            </body>
            </Layout>
        )
    }
}

module.exports = About;