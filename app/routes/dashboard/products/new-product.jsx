import { ClientOnly } from "remix-utils";
import React, { useState, Suspense } from "react";
import { Form } from "@remix-run/react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Skeleton, Switch, Textarea, Checkbox } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import slugify from "slugify";
import ArrowLeft from "~/components/svg/ArrowLeft";

let RichTextEditor = React.lazy(() => import("@mantine/rte"));

export default function NewProduct() {
  const [content, setContent] = useState('');
  const [productName, setProductName] = useState('');
  const navigate = useNavigate();

  const dropzoneChildren = ({status}) => {
    console.log('status', status);
    return (
      <div className="form-dropzone">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M22 7.81V13.9L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L2.67 18.95L2.56 19.03C2.19 18.23 2 17.28 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor"/>
          <path d="M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z" fill="currentColor"/>
          <path d="M21.9986 13.8986V16.1886C21.9986 19.8286 19.8286 21.9986 16.1886 21.9986H7.80859C5.25859 21.9986 3.41859 20.9286 2.55859 19.0286L2.66859 18.9486L7.58859 15.6486C8.38859 15.1086 9.51859 15.1686 10.2286 15.7886L10.5686 16.0686C11.3486 16.7386 12.6086 16.7386 13.3886 16.0686L17.5486 12.4986C18.3286 11.8286 19.5886 11.8286 20.3686 12.4986L21.9986 13.8986Z" fill="currentColor"/>
        </svg>
        <div className="form-dropzone--detail">
          <h3 className="entry-title">Set product image</h3>
          <p>Attach as many files as you like, each file should not exceed <strong>5mb</strong></p>
        </div>
      </div>
    )
  }

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="container large">
      <div className="widget">
        <div className="widget--body">
          <Form action="#" method="post" className="site-form">
            <div className="row form-title-wrapper">
              <div className="col col-12">
                <div className="form-description">
                  <p>Please fill out the form below to add a new product. <span onClick={goBack} aria-hidden><ArrowLeft /> Go back</span> for the product list.</p>
                </div>
              </div>
              <div className="col col-strech">
                <div className="form-item no-margin">
                  <TextInput
                    name="name"
                    placeholder="Entry product name"
                    size="md"
                    radius="md"
                    value={productName}
                    onChange={(event) => setProductName(event.currentTarget.value)}
                    styles={(theme) => ({
                      input: {
                        '&:focus, &:active': {
                          boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                        }
                      }
                     })}
                  />
                </div>
              </div>
              <div className="col col-auto hide-mobile">
                <div className="form-item no-margin">
                  <Button radius="md" size="md" type="submit">Save Product</Button>
                </div>
              </div>
              
              <div className="col col-12">
                <div className="entry-slug">
                  <p>
                    <strong>Product permalink:</strong>
                    {slugify(productName.toLowerCase())}
                  </p>
                </div>
              </div>
            </div>
            <div className="form-content-wrapper with-sidebar">
              <div className="column primary">
                <div className="form-item margin-large">
                  <div className="form-item--label">Entry product content</div>
                  <ClientOnly fallback={<Skeleton color="red" height={300} width={'100%'} />}>
                    {() => (
                      <Suspense
                        fallback={<Skeleton color="red" height={300} width={'100%'} />}
                      >
                        <RichTextEditor
                          placeholder="Product content"
                          name="content"
                          controls={[
                            ['bold', 'italic', 'strike', 'underline', 'link'],
                            ['h1', 'h2', 'h3', 'h4'],
                            ['unorderedList', 'orderedList'],
                            ['alignLeft', 'alignCenter', 'alignRight'],
                          ]}
                          value={content}
                          onChange={(value) => setContent(value)}
                        />
                      </Suspense>
                    )}
                  </ClientOnly>
                </div>
                <div className="form-item margin-large callout">
                  <div className="form-item--label bordered">Product prices</div>
                  <div className="form-description">
                    <p>The currency of the product is set to <strong>($)</strong>. Please go to settings to change the currency.</p>
                  </div>
                  <div className="form-item--body">
                    <TextInput
                      placeholder="$ 0.00"
                      label={`Regular Price ($)`}
                      className="vertical-input"
                      radius="md"
                      size="md"
                      required
                      name="regular_price"
                      type="number"
                      styles={(theme) => ({
                        input: {
                          '&:focus, &:active': {
                            boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                          }
                        }
                       })}
                    />
                    <TextInput
                      placeholder="$ 0.00"
                      label={`Sale Price ($)`}
                      className="vertical-input"
                      radius="md"
                      size="md"
                      name="sale_price"
                      type="number"
                      styles={(theme) => ({
                        input: {
                          '&:focus, &:active': {
                            boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                          }
                        }
                       })}
                    />
                  </div>
                </div>
                <div className="form-item">
                  <div className="form-item--label">Entry product short description</div>
                  <Textarea
                    placeholder="Entry description"
                    radius="md"
                    name="short_description"
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
                    <p>This field is for a short description of the product.</p>
                  </div>
                </div>
              </div>
              <div className="column sidebar">
                <div className="form-item">
                  <Switch
                    name="published"
                    label="Hide this product"
                  />
                  <div className="form-description">
                    <p>Do you want to hide this product? If you hide this product, it will not appear on the sales screen for customers.</p>
                  </div>
                </div>
                <div className="form-item">
                  <div className="form-item--label">Product image</div>
                  <Dropzone
                    onDrop={(files) => console.log('accepted files', files)}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={3 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                  >
                    {(status) => dropzoneChildren(status)}
                  </Dropzone>
                </div>
                <div className="form-item">
                  <div className="form-item--label">Shipping cost ($)</div>
                  <TextInput
                    placeholder="$ 0.00"
                    radius="md"
                    size="md"
                    name="shipping_coast"
                    type="number"
                    styles={(theme) => ({
                      input: {
                        '&:focus, &:active': {
                          boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                        }
                      }
                      })}
                  />
                  <div className="form-description">
                    <p>You can specify an extra shipping cost for the product. If you want to set <strong className="color-orange">free shipping</strong>, leave this field blank</p>
                  </div>
                </div>
                <div className="form-item">
                  <Checkbox
                    name="featured"
                    label="Featured product"
                  />
                  <div className="form-description">
                    <p>You can set this product as a featured product.</p>
                  </div>
                </div>
                <div className="form-item">
                  <Button radius="md" size="md" type="submit">Save Product</Button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}