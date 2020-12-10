const React = require('react');

class Layout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href={this.props.stylesheet}/>
                    {/* <a href={'/plants'}>Go Back Home</a><br/> */}
                    {/* <h1>{this.props.heading}</h1> */}
                </head>
                <body>
                    {/* <h1>{this.props.heading}</h1> */}
                    <nav>
                        <p className="navLI"><a href="/plants">Home</a></p>
                        <p className="navLI"><a href="/plants/new">Create a New Plant</a></p>
                    </nav>
                    {this.props.children}
                    {/* <script src={this.props.js}></script> */}
                    {/* <a href={'/plants/new'}>Create a New Plant</a><br/>             */}
                </body>
                <br/>
                <p>Created by bitingRent</p>
            </html>
        )
    }
}

module.exports = Layout;