import ParentCallingEachCompTryCatch from './01_EachCompTryCatch';
import ParentAloneTryCatch from './02_ParentAloneTryCatch';
import ParentWithErrorBoundary from './03_ParentWithErrorBoundary';
import {
  ErrorBoundary,
  useErrorBoundary,
} from 'react-error-boundary';

// eslint-disable @typescript-eslint/no-unused-vars
function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

//Case 1: If UI Element has two renders for both try and catch it will throw that error when executed.

function Greeting({ subject }) {
  try {
    return <div>Hello {subject.toUpperCase()}</div>;
  } catch (error) {
    const messager = error.message;
    //return <ErrorFallback error={error} />;
    return <div>{messager}</div>;
  }
}

function Farewell({ subject }) {
  return <div>Goodbye {subject.toUpperCase()}</div>;
}
//Case 1 : Parent with try/catch calling Each component with any render error will not be propagated to parent.
/* export const App = () => {
  return <ParentAloneTryCatch />;
}; */

//Case 2 : Parent calling Each component which has its own renders with try/catch will reflect.
/* export const App = () => {
  return <ParentCallingEachCompTryCatch />;
}; */

//Case 3: ErrorBoundary wrapper with FallbackComponent to Parent, Child with render errors.
export const App = () => {
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
};
