import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MantineProvider } from "@mantine/core";
import { AppProvider } from "./context/app-context";
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
        <AppProvider>
          <MantineTheme>
            <Outlet />
          </MantineTheme>
        </AppProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function MantineTheme({ children }) {
  const useTheme = {
    fontFamily: 'Inter, sans-serif',
    // White and black colors, defaults to '#fff' and '#000'
    black: '#060a23',
    // Should be key of theme.colors, cannot be actual color value
    primaryColor: 'violet',
    // Left to right or right to left direction, see RTL Support guide to learn more
    dir: 'ltr'
  };

  return (
    <MantineProvider
      theme={useTheme}
      withNormalizeCSS
      withGlobalStyles
    >
      {children}
    </MantineProvider>
  )
}