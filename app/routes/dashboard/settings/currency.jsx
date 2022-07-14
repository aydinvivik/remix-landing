import { useMemo, useState } from "react";
import { Form } from "@remix-run/react";
import { Button, Select } from "@mantine/core";
import { currencies } from "~/utils/currencies";

export const meta = () => ({
  title: 'Currency Settings | Dashboard',
});

export default function CurrencySettings() {
  const [select, setSelect] = useState("usd");

  const data = useMemo(() => {
    return (
      Object.entries(currencies)
      .map(({ "1": { code, name } }) => ({
        value: code.toLowerCase(),
        label: `${code.toUpperCase()} - ${name}`
      }))
    );
  }, [currencies]);

  return (
    <div className="content-wrapper">
      <div className="column primary">
        <Form action="#" method="post" className="site-form">
          <div className="form-heading bordered">
            <h4 className="entry-title">Currency Option</h4>
          </div>
          <div className="form-item">
            <Select
              placeholder="Currency"
              radius="md"
              data={data}
              searchable
              name="currency"
              nothingFound="No currency"
              value={select}
              onChange={setSelect}
              styles={(theme) => ({
                input: {
                  '&:focus, &:active': {
                    boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                  }
                }
              })}
            />
            <div className="form-description">
              <p>Please select the currency in which your store will sell. Default currency is <strong className="color-orange">US Dollar ($)</strong></p>
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