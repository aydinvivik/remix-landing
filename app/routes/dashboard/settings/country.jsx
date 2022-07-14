import { useMemo, useState, forwardRef } from "react";
import { Form } from "@remix-run/react";
import { Button } from "@mantine/core";
import { MultiSelect } from "react-multi-select-component";
import ReactCountryFlag from "react-country-flag";
import { countries } from "~/utils/countries";

export const meta = () => ({
  title: 'Country Settings | Dashboard',
});

const ArrowIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" data-chevron="true" style={{color: "rgb(134, 142, 150)"}}><path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
  );
};

const CustomItemRenderer = ({ checked, option, onClick, disabled }) => {
  return (
    <div className={`item-renderer ${disabled && "disabled"}`}>
      <label className="multiselect-item">
        <input
          type="checkbox"
          onChange={onClick}
          checked={checked}
          tabIndex={-1}
          disabled={disabled}
        />
        <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark"><path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
      </label>
      <ReactCountryFlag 
        countryCode={option.code}
        svg
        style={{
          width: '17px',
          height: '13px',
        }}
      />
      <span>{option.label}</span>
    </div>
  )
}

export default function CountrySettings() {
  const [select, setSelect] = useState([{value: "TUR", label: "Turkey (TR)", code: "TR"}]);

  const options = useMemo(() => {
    return (
      Object.entries(countries)
      .map(({"1": {alpha2, alpha3, name}}) => ({
        value: alpha3,
        label: `${name} (${alpha2})`,
        code: alpha2
      }))
    );
  }, [countries]);

  return (
    <div className="content-wrapper">
      <div className="column primary">
        <Form action="#" method="post" className="site-form">
          <div className="form-heading bordered">
            <h4 className="entry-title">Country Option</h4>
          </div>
          <div className="form-item">
            <MultiSelect
              options={options}
              value={select}
              name="countries"
              onChange={setSelect}
              ArrowRenderer={ArrowIcon}
              ItemRenderer={CustomItemRenderer}
              labelledBy="Select country"
              overrideStrings={{ "selectSomeItems": "Select country"}}
              className="form-multiselect"
            />
            <div className="form-description">
              <p>Please select the countries you want to sell to. Default country is <strong className="color-orange">Turkey (TR)</strong></p>
            </div>
          </div>
          <div className="form-item">
            <Button radius="md" size="md" type="submit">Save Settings</Button>
          </div>
        </Form>
        <div className="form-info">
          <div className="form-info--heading">
            <div className="entry-description">
              <p>Sales are open to the following countries only</p>
            </div>
          </div>
          <div className="form-info--body">
            <ul className="list-block">
              {select && (
                select.map((item, index) => (
                  <li className="list-block--item" key={index}>
                    <ReactCountryFlag 
                      className="country-flag"
                      countryCode={item.code}
                      svg
                      style={{
                        width: '17px',
                        height: '13px',
                      }}
                    />
                    <span>{item.label}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}