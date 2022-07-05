import dayjs from "dayjs";

export default function Topbar() {
  return (
    <div id="topbar" className="site-topbar dashboard">
      <div className="container large">
        <div className="row">
          <div className="col">
            <div className="dashboard-message">
              Hello sir 👋 How are you today?
              {' '}
              <strong>Today: {dayjs().format('DD, MMM MM, YYYY')}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}