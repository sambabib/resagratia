import React, { Component } from 'react';

// @components
import ErrorComponent from '../ErrorComponent/ErrorComponent';

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }


  render() {
    const { children } = this.props;

    return this.state.hasError ? <ErrorComponent /> : children;
  }
}

export default ErrorBoundary;
