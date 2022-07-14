import { useState } from "react";
import { Form } from "@remix-run/react";
import { Modal, Button, TextInput, Textarea, Select, Switch } from "@mantine/core";
import CurrencyInput from "react-currency-input-field";
import Plus from "~/components/svg/Plus";

const payments = [
  {
    value: "stripe",
    label: "Stripe Credit Card"
  }, {
    value: "klarna",
    label: "Klarna"
  }, {
    value: "paypal",
    label: "PayPal Payment"
  }, {
    value: "bank-transfer",
    label: "Bank Transfer"
  }, {
    value: "cash-on-delivery",
    label: "Cash on Delivery"
  }
]

export default function PaymentSettings() {
  const [opened, setOpened] = useState(false);
  const [enable, setEnable] = useState(true);
  const [select, setSelect] = useState("stripe");
  return (
    <div className="content-wrapper">
      <div className="column primary">
        <div className="form-heading bordered">
          <h4 className="entry-title">Payment Methods</h4>
          <Button variant="default" radius="md" leftIcon={<Plus />} onClick={() => setOpened(true)}>New Payment</Button>
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
            <Button radius="md" size="md" onClick={() => setOpened(true)}>Add Payment Method</Button>
          </div>
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="New Payment Method"
        centered
        size={760}
      >
        <Form action="#" method="post" className="site-form">
          <div className="row">
            <div className="col col-12 col-lg-6">
              <div className="form-item">
                <div className="form-item--label">Select Payment Method</div>
                <Select
                  placeholder="Payment Method"
                  radius="md"
                  data={payments}
                  name="currency"
                  nothingFound="No payment"
                  value={select}
                  onChange={setSelect}
                />
                <div className="form-description">
                  <p>Please select the payment method you wish to use.</p>
                </div>
              </div>
            </div>
            <div className="col col-12 col-lg-6">
              <div className="form-item">
                <div className="form-item--label">Extra Tax ($)</div>
                <CurrencyInput
                  id="payment-tax"
                  className="currency-input"
                  name="tax"
                  placeholder="Please enter a tax amount"
                  /* defaultValue={1000} */
                  decimalsLimit={2}
                  groupSeparator="."
                  decimalSeparator=","
                  /* disableGroupSeparators */
                  onValueChange={(float, value, values) => console.log('float', float, 'value', value, 'name', values)}
                />
                <div className="form-description">
                  <p>Enter the amount if you want to add extra tax</p>
                </div>
              </div>
            </div>
          </div>
          <div className="form-item">
            <div className="form-item--label">Payment Display Name</div>
            <TextInput
              name="name"
              placeholder="Bank Transfer e.g."
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
              <p>Enter the name of this payment method you want to appear on the site.</p>
            </div>
          </div>
          <div className="form-item">
            <div className="form-item--label">Payment description</div>
            <Textarea
              placeholder="Entry description"
              radius="md"
              name="description"
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
              <p>Enter the description of this payment method that you want to appear on the site.</p>
            </div>
          </div>
          <div className="form-item">
            <Switch
              label="Enable this payment method"
              checked={enable} onChange={(event) => setEnable(event.currentTarget.checked)}
            />
            <div className="form-description">
              <p>You need to activate this payment method to appear on the payment page.</p>
            </div>
          </div>
          <div className="form-item">
            <Button radius="md" size="md" type="submit">Add Payment Method</Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}