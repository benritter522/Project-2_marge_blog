const React = require('react');
// const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        return (
            <Layout title="Index Page"
                stylesheet="/css/style.css"
                // js="index.js"
            >
                <h1>Index Page</h1>
                {/* <ul className="index-page">
                    {
                        
                    }
                </ul> */}
            </Layout>
        )
    }
}

module.exports = Index;