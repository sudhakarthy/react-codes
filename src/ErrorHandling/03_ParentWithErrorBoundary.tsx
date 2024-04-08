import {
  ErrorBoundary,
  useErrorBoundary,
} from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

function Greeting({ subject }) {
  return <div>Hello {subject.toUpperCase()}</div>;
}

function Farewell({ subject }) {
  return <div>Hello {subject.toUpperCase()}</div>;
}
function ParentWithErrorBoundary() {
  const { showBoundary } = useErrorBoundary();

  function onClickEvent(event) {
    try {
      let subject;
      subject.message = event.target.value123;
      console.log('You are succesfull.');
    } catch {
      showBoundary(
        new Error('Something went wrong with user action')
      );
      console.error('Error, you got me');
    }
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/*  <Greeting /> //This will throw error.
      <Farewell /> */}
      <Greeting subject={'Hello'} />

      <button onClick={onClickEvent}> Catch me if you can! </button>
    </ErrorBoundary>
  );
}

export default ParentWithErrorBoundary;
