// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';

import React from 'react';

import './App.css';


class FetchRandomQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            content: '',
            link: 'https://twitter.com/intent/tweet'
        }
        this.fetchQuotes = this.fetchQuotes.bind(this);
      }

      componentDidMount() {
          this.fetchQuotes();
      }

      tweetLink = () => {
        let tweetMe = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + this.state.content + '"' + ' - ' + this.state.author + ' #quotes')
        this.setState({link: tweetMe});
      }

      fetchQuotes = () => {
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            this.setState({ author: data.author });
            this.setState({ content: data.content });
        })
      }

      render() {
        return (
            <div className="wrapper" id="quote-box"> 
            <p>Random Quote Machine</p>
            <a href={this.state.link} id="tweet-quote" onClick={this.tweetLink}>Tweet quote</a>
            <Button id="new-quote" onClick={this.fetchQuotes} variant="outline-light">New quote</Button>{' '}
            <h1 id="text"><q>{this.state.content}</q></h1>
            <p id="author">- {this.state.author}</p>
        </div>
        );
}
}

export default FetchRandomQuote;