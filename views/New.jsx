const React = require('react');
const Layout = require('./components/Layout.jsx');

class New extends React.Component {
    render() {
        return(
            <Layout title="New Plant"
                heading="Enter a New Plant:"
                stylesheet="/css/style.css"
                // js="index.js"
            >
                {/* <h1>Enter New Plant's Details:</h1> */}
                <h1>New Plant</h1>
                <div className="newInputForm">
                    <form className="inputForm" action="/plants" method="POST">
                        Nickname:       <input className="newTextbox" type="text" name="nickname" value="Nickname"/><br/><br/>
                        Name:           <input className="newTextbox" type="text" name="name" value="Name"/><br/><br/>
                        Latin Name:     <input className="newTextbox" type="text" name="latinName" value="Latin Name"/><br/><br/>
                        Link to Image:  <input className="newTextbox" type="text" name="img" value="Image Address"/><br/><br/>
                        Origin:         <input className="newTextbox" type="text" name="origin" value="Origin"/><br/><br/>
                        Description:    <input className="newTextbox" type="text" name="description" value="Description"/><br/><br/>
                        {/* <div className="newCheckBox"> */}
                            Fungus Gnats: <input className="newCheckBox" type="checkbox" id="newCheckBox" name="hasFungusGnats"/><br/><br/>
                            {/* <label htmlFor="newCheckBox"></label> */}
                        {/* </div> */}
                        <input type="submit" className="newSubmit" value="CREATE PLANT"/>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = New;