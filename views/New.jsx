const React = require('react');
const Layout = require('./components/Layout.jsx');

class New extends React.Component {
    render() {
        return(
            <Layout title="New Page"
                stylesheet="/css/style.css"
                // js="index.js"
            >
                <h1>New Page</h1>
            </Layout>
        )
    }
}

module.exports = New;