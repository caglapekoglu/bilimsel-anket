import React, { useState, useEffect } from 'react'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import FileUpload from "react-mui-fileuploader";
import Rating from "@mui/material/Rating";
import { uniqueId } from 'loadsh';
const Test = () => {
  const data =
    [
      {
        id: 0,
        type: "radio",
        elementType: "input",
        title: "flkjdshfkjsdhgfkjhsdgfjkhdsgfjhkdshgfjkhdsgfsdjkhfgsd",
        name: "test",
        value: null,
        data: [
          {
            key: 1,
            value: "yılda 1",
            isSelected: true,
            name: "key_1",
          },
          {
            key: 2,
            value: "ayda 1",
            isSelected: false,
            name: "key_2",
          }
        ]
      },
    ]

  const [formData, setFormData] = useState(data);
  const getComponent = (data) => {
    if (data.elementType === "input" && data.type === "radio") {
      return (
        <>
          <div className="col-md-12">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>{data.title}</p>
            </div>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={"first"}

              >
                {data.data.map((dataItem, index) => (
                  <FormControlLabel
                    key={uniqueId()}
                    value={dataItem.value}
                    control={<Radio checked={index == 0 ? true : false} />}
                    label={dataItem.value}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </>
      );
    }
  }
  const [newItem, setNewItem] = useState({
    id: 0,
    type: "radio",
    elementType: "input",
    title: "flkjdshfkjsdhgfkjhsdgfjkhdsgfjhkdshgfjkhdsgfsdjkhfgsd",
    name: "test",
    value: null,
    data: [
      {
        key: 1,
        value: "yılda 1",
        isSelected: true,
        name: "key_1",
      },
      {
        key: 2,
        value: "ayda 1",
        isSelected: false,
        name: "key_2",
      }
    ]
  },)
  const changeType = (data) => {
    let item = newItem;
    item.type = data;
    setNewItem(item);
  }
  const changeElementType = (data) => {
    let item = newItem;
    item.elementType = data;
    setNewItem(item);
  }
  const addNewItem = () => {
    let newItems = formData;
    newItems.push(newItem);
    setFormData(newItems);
    debugger
  }
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <input placeholder='type'
        onChange={e => changeType(e)}
      ></input>
      <input placeholder='elementType'
        onChange={(e) => changeElementType(e)}
      ></input>
      <button onClick={() => addNewItem()}>ekle</button>
      {
        formData.map((item) => {
          return (
            <>
              {getComponent(item)}
            </>
          )
        })
      }

    </div>
  )
}

export default Test;