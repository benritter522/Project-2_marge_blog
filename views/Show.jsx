const React = require('react');
const Layout = require('./components/Layout.jsx');

class Show extends React.Component {
    render() {
        const plant = this.props.plant;
        return(
            <Layout title="Show Page"
                stylesheet="/css/style.css"
                // js="index.js"
            >
                <header>
                    <h1>Show Page</h1>
                </header>
                {/* <blockquote class="imgur-embed-pub" lang="en" data-id="a/hbqz8wq"  ><a href="//imgur.com/a/hbqz8wq">Christmas Cactus Flower</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}
            <body>
                    <h2>{plant.nickname}</h2>
                    <h2>{plant.name}</h2>
                    <h2>{plant.latinName}</h2>
                    <img src={plant.img} className="showImg"/>
            </body>
            </Layout>
        )
    }
}

module.exports = Show;
