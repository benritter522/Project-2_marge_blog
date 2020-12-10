const React = require('react');
const Layout = require('./components/Layout.jsx');

class Edit extends React.Component {
    // const {fruit} = this.props; //this.props MUST be an object or this will break
    render() {
        const plant = this.props.plant;
        // const mongoIndex = this.props.mongoIndex;
        // console.log(plant);
        return(
            <Layout title="Edit Page"
                stylesheet="/css/style.css"
                // js="index.js"
            >
                <h1>Edit Plant</h1>
                <div className="editInputForm">
                    <form className="inputForm" action={`/plants/${plant._id}?_method=PUT`} method="POST">
                        Nickname:       <input className="editTextbox" type="text" name="nickname" value={plant.nickname}/><br/><br/>
                        Name:           <input className="editTextbox" type="text" name="name" value={plant.name}/><br/><br/>
                        Latin Name:     <input className="editTextbox" type="text" name="latinName" value={plant.latinName}/><br/><br/>
                        Link to Image:  <input className="editTextbox" type="text" name="img" value={plant.img}/><br/><br/>
                        Origin:         <input className="editTextbox" type="text" name="origin" value={plant.origin}/><br/><br/>
                        Description:    <input className="editTextbox" type="text" name="description" value={plant.description}/><br/><br/>
                        {/* <div className="newCheckBox"> */}
                            Fungus Gnats: <input className="editCheckBox" type="checkbox" id="editCheckBox" name="hasFungusGnats"/><br/><br/>
                            {/* <label htmlFor="newCheckBox"></label> */}
                        {/* </div> */}
                        <input type="submit" className="editSubmit" value="UPDATE PLANT"/>
                    </form>

                </div>
            </Layout>
        )
    }
}

module.exports = Edit;