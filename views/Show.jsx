const React = require('react');
const Layout = require('./components/Layout.jsx');

class Show extends React.Component {
    render() {
        return(
            <Layout title="Show Page"
                stylesheet="/css/style.css"
                // js="index.js"
            >
                <h1>Show Page</h1>
            </Layout>
        )
    }
}

module.exports = Show;