import { useState } from "react";
import { Form } from "@remix-run/react";
import { DEFAULT_THEME, Button, Select, TextInput, Textarea, Checkbox } from "@mantine/core";

export const meta = () => ({
  title: 'Checkout Settings | Dashboard',
});

const checkoutStyle = [
  {
    value: "style-1",
    label: "Step by step style"
  }, {
    value: "style-2",
    label: "Products above"
  }, {
    value: "style-3",
    label: "Products on the left"
  }
];

const formRadius = [
  {
    value: "xs",
    label: "Xsmall"
  }, {
    value: "sm",
    label: "Small"
  }, {
    value: "md",
    label: "Medium"
  }, {
    value: "lg",
    label: "Large"
  }, {
    value: "xl",
    label: "XLarge"
  }
]

export default function CheckoutPage() {
  const [style, setStyle] = useState("style-3");
  const [radius, setRadius] = useState("md");
  const [color, setColor] = useState("violet");

  const changeColor = (event) => {
    setColor(event);
  };

  return (
    <div className="content-wrapper">
      <div className="column primary">
        <Form action="#" method="post" className="site-form">
          <div className="form-heading bordered">
            <h4 className="entry-title">Checkout Options</h4>
          </div>
          <div className="row">
            <div className="col col-12 col-md-6 col-lg-4">
              <div className="form-item">
                <div className="form-item--label">Checkout Style</div>
                <Select
                  placeholder="Select style"
                  radius="md"
                  data={checkoutStyle}
                  name="checkout_style"
                  value={style}
                  onChange={setStyle}
                  styles={(theme) => ({
                    input: {
                      '&:focus, &:active': {
                        boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                      }
                    }
                  })}
                />
                <div className="form-description">
                  <p>Choose how you want the checkout page to look like.</p>
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-6 col-lg-2">
              <div className="form-item">
                <div className="form-item--label">Form Radius</div>
                <Select
                  placeholder="Select radius"
                  radius="md"
                  data={formRadius}
                  name="form_radius"
                  value={radius}
                  onChange={setRadius}
                  styles={(theme) => ({
                    input: {
                      '&:focus, &:active': {
                        boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                      }
                    }
                  })}
                />
                <div className="form-description">
                  <p>Radius ratio in the form.</p>
                </div>
              </div>
            </div>
            <div className="col col-12 col-lg-6">
              <div className="form-item">
                <div className="form-item--label">Color scheme</div>
                <div className="color-changer">
                  <div className={`color item dark ${color === 'dark' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('dark')} style={{backgroundColor: DEFAULT_THEME.colors.dark[6]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item gray ${color === 'gray' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('gray')} style={{backgroundColor: DEFAULT_THEME.colors.gray[5]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item red ${color === 'red' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('red')} style={{backgroundColor: DEFAULT_THEME.colors.red[6]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item pink ${color === 'pink' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('pink')} style={{backgroundColor: DEFAULT_THEME.colors.pink[6]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item grape ${color === 'grape' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('grape')} style={{backgroundColor: DEFAULT_THEME.colors.grape[6]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item violet ${color === 'violet' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('violet')} style={{backgroundColor: DEFAULT_THEME.colors.violet[5]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item indigo ${color === 'indigo' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('indigo')} style={{backgroundColor: DEFAULT_THEME.colors.indigo[5]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item blue ${color === 'blue' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('blue')} style={{backgroundColor: DEFAULT_THEME.colors.blue[5]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item cyan ${color === 'cyan' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('cyan')} style={{backgroundColor: DEFAULT_THEME.colors.cyan[4]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item teal ${color === 'teal' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('teal')} style={{backgroundColor: DEFAULT_THEME.colors.teal[5]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item green ${color === 'green' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('green')} style={{backgroundColor: DEFAULT_THEME.colors.green[6]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item lime ${color === 'lime' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('lime')} style={{backgroundColor: DEFAULT_THEME.colors.lime[5]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item yellow ${color === 'yellow' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('yellow')} style={{backgroundColor: DEFAULT_THEME.colors.yellow[3]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                  <div className={`color item orange ${color === 'orange' ? 'active-color' : 'set-color'}`} onClick={() => changeColor('orange')} style={{backgroundColor: DEFAULT_THEME.colors.orange[5]}}>
                    <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                </div>
                <div className="form-description">
                  <p>Select the color scheme of the site.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="form-item">
            <div className="form-item--label">Notification Title</div>
            <TextInput
              name="notification_title"
              placeholder="Entry notification name"
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
              <p>It is the notification banner at the top of the checkout page. If you leave it blank, the notification will not appear.</p>
            </div>
          </div>
          <div className="form-item">
            <div className="form-item--label">Notification Description</div>
            <Textarea
              placeholder="Entry description"
              radius="md"
              name="notification_description"
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
              <p>It is a description text field for the notification.</p>
            </div>
          </div>
          <div className="form-item">
            <div className="form-item--label">Counter Minute</div>
            <TextInput
              name="counter_min"
              placeholder="Enter counter minute"
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
              <p>If you want a counter to appear on the checkout page, enter the minute rate.</p>
            </div>
          </div>
          <div className="form-item">
            <Checkbox
              name="fake_banner"
              label="Activate fake purchase banner"
            />
            <div className="form-description">
              <p>Fake banner notification showing that different customers have purchased products</p>
            </div>
          </div>
          <div className="form-item">
            <Button radius="md" size="md" type="submit">Save Settings</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}