import { Link } from "@reach/router";
import axios from "axios";
import React from "react";

class WatchArea extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  componentDidMount() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?&part=snippet,statistics,status,player&key=${process.env.API_KEY}&id=${this.props.id}`
      )
      .then((res) => {
        const item = res.data.items[0];
        this.setState({
          title: item.snippet.title,
          views: item.statistics.viewCount,
          description: item.snippet.description,
          channel: item.snippet.channelTitle,
          likes: item.statistics.likeCount,
          url: item.id,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if(this.state.loading) {
        return <h1>loading...</h1>
    }

    const { title, views, description, channel, likes, url } = this.state;

    return (
      <div className="watch-area">
        <header>
          <Link to="/" className="logo">
            <h1>WeTube</h1>
          </Link>
        </header>

        <div className="player">
          <iframe
            src={`//www.youtube.com/embed/${url}`}
            frameBorder="0"
            allowFullScreen
            title={title}
          ></iframe>
        </div>

        <div className="player-info">
          <h2>{title}</h2>
          <div className="stat-container">
            <span> {views} views</span> • <span> {likes} likes</span>
          </div>
          <strong> {channel} </strong>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default WatchArea;
