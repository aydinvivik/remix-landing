export const meta = () => ({
  title: 'Homepage | Dashboard',
});

export default function Homepage() {
  return (
    <div id="primary" className="site-content">
      <div className="container large">
        <div className="page-header dashboard style-2">
          <div className="column left">
            <h1 className="entry-name">Homepage</h1>
            <div className="entry-description">
              <p>You can customize the home page yourself. Remember that this page, which is the showcase of your site, is important.</p>
            </div>
          </div>
        </div>
        <div className="widget">
          <div className="widget--body">
            homepage
          </div>
        </div>
      </div>
    </div>
  );
}