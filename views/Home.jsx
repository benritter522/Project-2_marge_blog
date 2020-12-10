const React = require('react');
const Layout = require('./components/Layout.jsx');

class Home extends React.Component {
    render() {
        return(
            <Layout 
            title="Home"
            stylesheet="/css/style.css"
            >
            <body>
                <h1>Hello and welcome to the home page</h1>
            </body>
            </Layout>
        )
    }
}

module.exports = Home;