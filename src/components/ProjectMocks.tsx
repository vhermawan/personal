export function DashMock() {
  return (
    <div className="mock dash">
      <div className="mock-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="addr">hilir.io/dashboard</span>
      </div>
      <div className="mock-body">
        <div className="mock-side">
          <i />
          <i className="on" />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="mock-main">
          <div className="stats">
            <span />
            <span />
            <span />
          </div>
          <svg className="chart" viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9DB6FF" stopOpacity=".55" />
                <stop offset="100%" stopColor="#9DB6FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,62 L20,55 L40,42 L60,48 L80,32 L100,28 L120,38 L140,22 L160,18 L180,28 L200,12 L200,80 L0,80 Z"
              fill="url(#cg1)"
            />
            <path
              d="M0,62 L20,55 L40,42 L60,48 L80,32 L100,28 L120,38 L140,22 L160,18 L180,28 L200,12"
              fill="none"
              stroke="#9DB6FF"
              strokeWidth="1.4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function PhoneMock() {
  return (
    <div className="mock phone">
      <div className="phone-body">
        <span className="status">9:41</span>
        <h5>habits</h5>
        <div className="streak">
          127 <span>day streak</span>
        </div>
        <div className="dots">
          <i className="on" />
          <i className="on" />
          <i />
          <i className="on" />
          <i className="on" />
          <i />
          <i className="on" />
        </div>
        <div className="rows">
          <p>morning run</p>
          <p>read 30 min</p>
          <p>8 glasses water</p>
        </div>
      </div>
    </div>
  );
}

export function CodeMock() {
  return (
    <div className="mock code">
      <div className="mock-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="addr">use-scrollspy.ts</span>
      </div>
      <pre>
        <span className="kw">import</span>{' '}
        {'{ useScrollSpy }'}{' '}
        <span className="kw">from</span> <span className="str">'use-scrollspy'</span>;{'\n\n'}
        <span className="cm">// returns active section id</span>{'\n'}
        <span className="kw">const</span> active = <span className="fn">useScrollSpy</span>(ids, {'{'}
        {'\n  '}offset: <span className="num">80</span>,{'\n  '}threshold:{' '}
        <span className="num">0.4</span>,{'\n'}
        {'})'}
        <span className="blink" />
      </pre>
    </div>
  );
}

export function CmsMock() {
  return (
    <div className="mock cms">
      <div className="mock-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="addr">nara — products</span>
      </div>
      <div className="cms-rows">
        <div>
          <span className="thumb" />
          <span className="name" />
          <span className="price">Rp 48k</span>
        </div>
        <div>
          <span className="thumb" />
          <span className="name" />
          <span className="price">Rp 32k</span>
        </div>
        <div>
          <span className="thumb" />
          <span className="name" />
          <span className="price">Rp 65k</span>
        </div>
        <div>
          <span className="thumb" />
          <span className="name" />
          <span className="price">Rp 42k</span>
        </div>
      </div>
    </div>
  );
}
