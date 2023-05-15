import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import './index.scss'
import BackgroundAni from '../BackgroundAni'

export const Layout = () => {
  return (
    <>
      <div className="App">
        <Sidebar />

        <div className="page">
          <span className="tags top-tags">&lt;body&gt;</span>
          <Outlet />
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="body-tag-html">&lt;html&gt;</span>
          </span>
        </div>
        <BackgroundAni />
      </div>
    </>
  )
}
