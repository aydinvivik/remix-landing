import { useState } from "react";
import { Form } from "@remix-run/react";
import { Button, TextInput, Textarea, Switch } from "@mantine/core";

export const meta = () => ({
  title: 'Gdpr Settings | Dashboard',
});

export default function GdprSettings() {
  const [gdpr, setGdpr] = useState(false);
  return (
    <div className="content-wrapper">
      <div className="column primary">
        <Form action="#" method="post" className="site-form">
          <div className="form-heading bordered">
            <h4 className="entry-title">GDPR Options</h4>
          </div>
          <div className="form-item">
            <Switch
              label="Enable GDPR Alert"
              checked={gdpr} onChange={(event) => setGdpr(event.currentTarget.checked)}
            />
            <div className="form-description">
              <p>Activate this option if you want to show gdpr alert on the site.</p>
            </div>
          </div>
          {gdpr && (
            <>
              <div className="row">
                <div className="col col-12 col-lg-6">
                  <div className="form-item">
                    <div className="form-item--label">GDPR Title</div>
                    <TextInput
                      name="gdpr_title"
                      placeholder="Enter gdpr title"
                      size="md"
                      radius="md"
                      styles={(theme) => ({
                        input: {
                          '&:focus, &:active': {
                            boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                          }
                        }
                      })}
                    />
                    <div className="form-description">
                      <p>Enter the title that will appear in Gdpr.</p>
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-lg-6">
                  <div className="form-item">
                    <div className="form-item--label">GDPR Button Text</div>
                    <TextInput
                      name="gdpr_button"
                      placeholder="Enter gdpr button text"
                      size="md"
                      radius="md"
                      styles={(theme) => ({
                        input: {
                          '&:focus, &:active': {
                            boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                          }
                        }
                      })}
                    />
                    <div className="form-description">
                      <p>Enter the gdpr accept button.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-item">
                <div className="form-item--label">GDPR Description</div>
                <Textarea
                  placeholder="Enter description"
                  radius="md"
                  name="gdpr_description"
                  autosize
                  minRows={4}
                  maxRows={6}
                  styles={(theme) => ({
                    input: {
                      '&:focus, &:active': {
                        boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                      }
                    }
                  })}
                />
                <div className="form-description">
                  <p>Enter the description of the gdpr you added.</p>
                </div>
              </div>
            </>
          )}
          <div className="form-item">
            <Button radius="md" size="md" type="submit">Save Settings</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}