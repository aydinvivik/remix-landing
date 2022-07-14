import { useState } from "react";
import { Form } from "@remix-run/react";
import { Button, TextInput, Textarea } from "@mantine/core";

export const meta = () => ({
  title: 'Settings | Dashboard',
});

export default function SettingsIndex() {
  const [name, setName] = useState('shopwerk');

  return (
    <div className="content-wrapper">
      <div className="column primary">
        <Form action="#" method="post" className="site-form">
          <div className="form-item">
            <div className="form-item--label">Store Name</div>
            <TextInput
              name="name"
              placeholder="Entry store name"
              size="md"
              radius="md"
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
              styles={(theme) => ({
                input: {
                  '&:focus, &:active': {
                    boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                  }
                }
              })}
            />
            <div className="form-description">
              <p>Enter your store name that will be visible to your customers.</p>
            </div>
          </div>
          <div className="form-item">
            <Button radius="md" size="md" type="submit">Save Settings</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}