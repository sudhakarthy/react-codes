function Greeting({ subject }) {
  try {
    return <div>Hello {subject.toUpperCase()}</div>;
  } catch (error) {
    const messager = error.message;
    //return <ErrorFallback error={error} />;
    return <div>{messager} due to trycatch by Child : Greeting</div>;
  }
}

function Farewell({ subject }) {
  try {
    return <div>Hello {subject.toUpperCase()}</div>;
  } catch (error) {
    const messager = error.message;
    //return <ErrorFallback error={error} />;
    return <div>{messager} due to trycatch by Child : Farewell</div>;
  }
}

function ParentCallingEachCompTryCatch() {
  return (
    <div>
      <Greeting />
      <Farewell />
    </div>
  );
}

export default ParentCallingEachCompTryCatch;
