import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import AP0101 from './AppForm/AP0101/appCtx'
import AP0102 from './AppForm/AP0102/appCtx'

export default function App() {
  return (
    <div>
      <div className='banner' style={{ borderBottom: "solid 1px", padding: ".5rem 1rem" }}>
        <nav>
          <Link to="/">Home</Link>{` | `}
          <Link to="/ap0101">AP0101</Link>{` | `}
          <Link to="/ap0102">AP0102</Link>
        </nav>
      </div>

      <div className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ap0101" element={<AP0101 />} />
          <Route path="ap0102" element={<AP0102 />} />
        </Routes>
      </div>
    </div>
  );
}
