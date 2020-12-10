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
                    <div className="showPlant">
                        <h2>{plant.nickname} the</h2>
                        <h2>{plant.name}</h2>
                        <h2>{plant.latinName}</h2>
                        <br/><br/>
                        <img src={plant.img} className="showImg"/>
                        <br/><br/>
                        <h2>Origin: {plant.origin}</h2>
                        <h2>Description: {plant.description}</h2>
                        <form className="indexPlantButtonForm" method="POST" action={`/plants/${plant._id}?_method=DELETE`}>
                            <input className="indexPlantButton" type="submit" value={`DELETE THIS ${plant.name.toUpperCase()}`}/>
                        </form><br/>
                        <form className="indexPlantButtonForm" method="GET" action={`/plants/${plant._id}/edit`}>
                            <input className="indexPlantButton" type="submit" value={`EDIT THIS ${plant.name.toUpperCase()}`}/>
                        </form><br/>
                    </div>

            </body>
            </Layout>
        )
    }
}

module.exports = Show;
