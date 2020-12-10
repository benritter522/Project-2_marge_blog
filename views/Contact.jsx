const React = require('react');
const Layout = require('./components/Layout.jsx');

class Contact extends React.Component {
    render() {
        return(
            <Layout 
            title="Contact Plants"
            stylesheet="/css/style.css"
            >
            <body>
                <h1>Please close your eyes and think about the plants to contact them.</h1>
                <h1>Please hold while I transfer your call.</h1>
            </body>
            </Layout>
        )
    }
}

module.exports = Contact;