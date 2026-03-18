import Raptorize from 'react-raptorize';

function App() {
  return (
    <div className="page">
      <div className="page__backdrop" aria-hidden="true" />

      <main className="page__content">
        <h1 className="title">react-raptorize</h1>

        <section className="raptorizeWrap" aria-label="Konami code display">
          <div className="raptorizeWrap__inner">
            <Raptorize code={true} disabled={false} sound={true} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
