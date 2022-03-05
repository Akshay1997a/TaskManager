import React, {Component} from 'react';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';

interface props {}
interface state {
  hasError: boolean;
  error?: null;
}

export class ErrorProvider extends Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {hasError: false};
  }
  static getDerivedStateFromError(error: any) {
    return {hasError: true, error};
  }

  render(): React.ReactNode {
    const {error, hasError} = this.state;
    if (hasError) {
      return <ErrorScreen error={error} />;
    }
    return this.props.children;
  }
}
