import { Button } from "@mantine/core";
import { Link } from "@remix-run/react";
import Plus from "~/components/svg/Plus";

export const meta = () => ({
  title: 'Pages | Dashboard',
});

export default function PagesIndex() {
  return (
    <div className="container large">
      <div className="page-header dashboard">
        <div className="column left">
          <h1 className="entry-name">Ohter Pages</h1>
          <div className="entry-description">
            <p>You can edit the content of some pages such as Privacy Policy, Terms Conditions, etc. and create new pages.</p>
          </div>
        </div>
        <div className="column right">
          <Button radius="md" variant="default" leftIcon={<Plus />} component={Link} to="./new-page">New Page</Button>
        </div>
      </div>
      <div className="empty-content">
        <svg className="empty-img-simple" width="80" height="67" viewBox="0 0 64 41">
          <g transform="translate(0 1)" fill="none" fillRule="evenodd">
            <ellipse className="empty-img-simple-ellipse" fill="#f4f6fa" cx="32" cy="33" rx="32" ry="7" />
            <g className="empty-img-simple-g" fillRule="nonzero" stroke="#d9dbe8">
              <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
              <path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#f8f9fb" className="empty-img-simple-path" />
            </g>
          </g>
        </svg>
        <div className="empty-content--content">
          <h2 className="entry-title">No content found</h2>
          <div className="entry-description">
            <p>No content was found for this page. Please add new content to view the content.</p>
          </div>
          <Button radius="md" size="md" component={Link} to="./new-page">Add The First Page</Button>
        </div>
      </div>
    </div>
  );
}