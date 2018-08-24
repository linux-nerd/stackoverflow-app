import * as React from 'react';

const WithLoader = (Component: React.StatelessComponent<any>): React.StatelessComponent<any> => {
  const WithLoadingComponent: React.StatelessComponent<any> = ({ isLoading, ...props }: any): React.ReactElement<any> => {
    if (!isLoading) {
      return <Component {...props} />
    }
    return (<p>Be Hold, fetching data may take some time :)</p>);
  }

  return WithLoadingComponent;
}

export { WithLoader };