const React = require('react');
const Layout = require('./components/Layout.jsx');

class Index extends React.Component {
    render() {
        const plants = this.props.plants;
        // const {name, latinName} = this.props plant // this line is for singular elements
        return (
            <Layout 
            title="Index Page"
            stylesheet="/css/style.css"
            // js="index.js"
            >
                <header>
                    <h1>Here are my plants!</h1>
                </header>
                <nav>
                    {/* <a href="/plants/new">Enter a new Plant</a> */}
                </nav>
                <div className="indexAllPlants">
                    {
                        plants.map((plant, index) => {
                            return (
                                <div className="indexSinglePlant">
                                    {/* <div className="indexPlantClick"> */}
                                        <a href={`/plants/${plant._id}`}>
                                        <p className="indexPlantNickname">{plant.nickname} the </p>

                                            <p className="indexPlantName">{plant.name}</p>

                                            <img className="indexPlantImg" src={plant.img}/>
                                            {/* <blockquote class="imgur-embed-pub" lang="en" data-id="a/hbqz8wq"  ><a href="//imgur.com/a/hbqz8wq">Christmas Cactus Flower</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}
                                        </a><br/><br/>
                                        <form className="indexPlantButtonForm" method="POST" action={`/plants/${plant._id}?_method=DELETE`}>
                                            <input className="indexPlantButton" type="submit" value={`DELETE THIS ${plant.name.toUpperCase()}`}/>
                                        </form><br/>
                                        <form className="indexPlantButtonForm" method="GET" action={`/plants/${plant._id}/edit`}>
                                            <input className="indexPlantButton" type="submit" value={`EDIT THIS ${plant.name.toUpperCase()}`}/>
                                        </form><br/>
                                    {/* </div> */}
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