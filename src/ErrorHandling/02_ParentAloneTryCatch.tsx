function Greeting({ subject }) {
  return <div>Hello {subject.toUpperCase()}</div>;
}

function Farewell({ subject }) {
  return <div>Hello {subject.toUpperCase()}</div>;
}

function ParentAloneTryCatch() {
  try {
    return (
      <div>
        <Greeting />
        <Farewell />
      </div>
    );
  } catch (error) {
    const messager = error.message;
    //return <ErrorFallback error={error} />;
    return <div>{messager} from Parent : ParentAloneTryCatch</div>;
  }
}

export default ParentAloneTryCatch;
