import { Close } from "@mui/icons-material";
import { Chip, Stack, TextField, Typography } from "@mui/material";
import React, { forwardRef, useEffect, useRef, useState } from "react";

const InputTags = forwardRef(({ defaultValue = [], colors = [], ...props }, inputRef) => {
  const [tags, setTags] = useState([...defaultValue]);
  const tagRef = useRef(null);

  // add tag
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      tagRef.current.value.trim() != "" &&
      !tags.includes(tagRef.current.value.trim())
    )
      setTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
  };

  // delete tag
  const handleDelete = (value) => {
    const newtags = tags.filter((val) => val.replace('_', ' ') !== value);
    setTags(newtags);
  };

  useEffect(() => {
    setTags([...defaultValue])
  }, [defaultValue])

  return (
    <Stack flexGrow={1} width={"100%"} bgcolor={"white"}>
      <form onSubmit={handleOnSubmit}>
        {tags?.map((data, index) => (
          <Tag handleDelete={handleDelete} bgColor={colors[index]} data={data.replace('_', ' ')} key={index} />
        ))}
        <TextField
          inputRef={tagRef}
          variant="standard"
          size="small"
          margin="none"
          placeholder="Enter tags here"
        />
      </form>
      <input
        {...props}
        ref={inputRef}
        readOnly
        value={tags.join(",")}
        hidden
        type="text"
      />
    </Stack>
  );
});

function Tag({ data, handleDelete, bgColor }) {
  return (
    <Chip
      sx={{ margin: "0 0.5rem 0.5rem 0", backgroundColor: bgColor }}
      label={
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Typography style={{color: 'white', mixBlendMode: 'difference'}}>{data}</Typography>
          <Close
            style={{ cursor: "pointer", fontSize: "1rem", color: 'white', mixBlendMode: 'difference'  }}
            onClick={() => {
              handleDelete(data);
            }}
          />
        </Stack>
      }
    />
  );
}
export default InputTags;
