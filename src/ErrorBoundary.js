import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    console.error("ErrorBoundary caught an error", err, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error while fetching the video{" "}
          <Link to="/">Click here</Link> to go back to the homepage.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
