import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import baseStyle from './styles/base.css';

export const links = () => {
  return [{ rel: "stylesheet", href: baseStyle }]
}

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix Apps",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
