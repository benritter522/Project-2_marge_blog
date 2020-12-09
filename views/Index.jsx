const React = require('react');
const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        const plants = this.props.plants;
        // const {name, latinName} = this.props plant // this line is for singular elements
        return (
            <Layout title="Index Page"
                stylesheet="/css/style.css"
                // js="index.js"
            >
                <header>
                    <h1>Here are my plants!</h1>
                </header>
                <nav>
                    <a href="/plants/new">Enter a new Plant</a>
                </nav>
                <div className="indexAllPlants">
                    {
                        plants.map((plant, index) => {
                            return (
                                <div className="indexSinglePlant">
                                    <div className="indexPlantClick">
                                        <a href={`/plants/${plant._id}`}>
                                            <p className="indexPlantName">{plant.name}</p>
                                            <img className="indexPlantImg" src={plant.img}/>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Layout>
        )
    }
}

module.exports = Index;