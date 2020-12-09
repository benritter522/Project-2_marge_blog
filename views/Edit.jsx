const React = require('react');
const Layout = require('./components/Layout.jsx');

class Edit extends React.Component {
    render() {
        return(
            <Layout title="Edit Page"
                stylesheet="/css/style.css"
                // js="index.js"
            >
                <h1>Edit Page</h1>
            </Layout>
        )
    }
}

module.exports = Edit;