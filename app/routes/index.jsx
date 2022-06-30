import { Button } from '@mantine/core';
import Layout from "~/components/shared/Layout";

export const meta = () => ({
  title: 'Homepage',
});

export default function Index() {
  return (
    <Layout>
      <Button>Hello world!</Button>
      <div id="primary" className="site-content">
        <h1>rere</h1>
      </div>
    </Layout>
  );
}
