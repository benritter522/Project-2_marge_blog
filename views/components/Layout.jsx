const React = require('react');

class Layout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href={this.props.stylesheet}/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    <nav>
                        <ul>
                        {/* <li className="navLI"><a href="/fruits">Home</a></li>
                        <li className="navLI"><a href="/fruits/new">Create a New Fruit</a></li> */}
                        </ul>
                    </nav>
                    {this.props.children}
                    {/* <script src={this.props.js}></script> */}
                </body>
            </html>
        )
    }
}

module.exports = Layout;