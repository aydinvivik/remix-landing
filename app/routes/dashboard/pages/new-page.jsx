import { ClientOnly } from "remix-utils";
import React, { useEffect, useState, Suspense } from "react";
import { Form } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import { Button, TextInput, Skeleton, Switch, Textarea, Checkbox } from "@mantine/core";
import slugify from "slugify";
import ArrowLeft from "~/components/svg/ArrowLeft";

let RichTextEditor = React.lazy(() => import("@mantine/rte"));

export const meta = () => ({
  title: 'New Page | Dashboard',
});

export default function NewPage() {
  const [checked, setChecked] = useState(true);
  const [content, setContent] = useState('');
  const [pageName, setPageName] = useState('');
  const [pageSlug, setPageSlug] = useState('');
  const [pagePrefix, setPagePrefix] = useState('/page/');
  const [slug, SetSlugCreated] = useState(false);
  const navigate = useNavigate();

  const changePageName = (event) => {
    setPageName(event);

    if (!slug) {
      setPageSlug(slugify(event.toLowerCase()));
    }
  }

  const changePageSlug = (event) => {
    setPageSlug(event);
    SetSlugCreated(true);
  }

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (pageSlug.length > 1) {
      SetSlugCreated(true);
    }
  }, []);
  return (
    <div className="container large">
      <div className="widget">
        <div className="widget--body">
          <Form action="#" method="post" className="site-form">
            <div className="row form-title-wrapper">
              <div className="col col-12">
                <div className="form-description">
                  <p>Please fill out the form below to add a new page. <span onClick={goBack} aria-hidden><ArrowLeft /> Go back</span> for the page list.</p>
                </div>
              </div>
              <div className="col col-strech">
                <div className="form-item no-margin">
                  <TextInput
                    name="name"
                    placeholder="Entry page name"
                    size="md"
                    radius="md"
                    value={pageName}
                    onChange={(event) => changePageName(event.currentTarget.value)}
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
                  <Button radius="md" size="md" type="submit">Save Page</Button>
                </div>
              </div>

              <div className="col col-12">
                <div className="entry-slug">
                  <p>
                    <strong>Page permalink:</strong>
                    {slugify(pageName.toLowerCase())}
                  </p>
                </div>
              </div>
            </div>
            <div className="form-content-wrapper with-sidebar">
              <div className="column primary">
              <div className="form-item margin-large">
                <div className="form-item--label">Entry page content</div>
                  <ClientOnly fallback={<Skeleton color="red" height={300} width={'100%'} />}>
                    {() => (
                      <Suspense
                        fallback={<Skeleton color="red" height={300} width={'100%'} />}
                      >
                        <RichTextEditor
                          placeholder="Page content"
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
              </div>
              <div className="column sidebar">
                <div className="form-item">
                  <Switch
                    name="published"
                    label="Publish this page"
                    checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}
                  />
                  <div className="form-description">
                    <p>Please enable this option to make the page visible. If you do not activate it, the page will not be shown to customers.</p>
                  </div>
                </div>
                <div className="form-item">
                  <div className="form-item--label">Page slug prefix</div>
                  <TextInput
                    placeholder="Enter slug prefix"
                    radius="md"
                    size="md"
                    value={pagePrefix} 
                    onChange={(event) => setPagePrefix(event.currentTarget.value)}
                    onBlur={(event) => setPagePrefix(`/${slugify(event.currentTarget.value.toLowerCase())}/`)}
                    styles={(theme) => ({
                      input: {
                        '&:focus, &:active': {
                          boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                        }
                      }
                    })}
                  />
                  <div className="form-description">
                    <p>Don't forget to enter the page's visible prefix!</p>
                  </div>
                </div>
                <div className="form-item">
                  <div className="form-item--label">Page slug (URL)</div>
                  <TextInput
                    placeholder="Enter slug"
                    radius="md"
                    size="md"
                    value={pageSlug} 
                    onChange={(event) => changePageSlug(event.currentTarget.value)}
                    onBlur={(event) => setPageSlug(slugify(event.currentTarget.value.toLowerCase()))}
                    styles={(theme) => ({
                      input: {
                        '&:focus, &:active': {
                          boxShadow: `0 0 2px 4px ${theme.colors.violet[0]}!important`,
                        }
                      }
                    })}
                  />
                  <div className="form-description">
                    <p>You can edit the visible link of the page.</p>
                  </div>
                </div>
                <div className="form-item">
                  <Button radius="md" size="md" type="submit">Save Page</Button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}