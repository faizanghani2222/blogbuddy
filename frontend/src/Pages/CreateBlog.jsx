import { Box, Button, Img, Input, Select, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { postBlog, uploadFile } from "../api";
import Navbar from "../Components/Navbar";
const init = {
  title: "",
  image: "",
  category: "",
  content: "",
};
const CreateBlog = () => {
  const [blog, setBlog] = useState(init);
  const [file, setFile] = useState("");
  const [content, setContent] = useState("");
  const modules = {
    toolbar: [["bold", "italic", "underline", "strike"]],
  };
  const { quill, quillRef } = useQuill({ modules });

  const getImage = async () => {
    if (file) {
      const imageData = new FormData();
      imageData.append("name", file.name);
      imageData.append("file", file);
      const res = await uploadFile(imageData);
      setBlog({
        ...blog,
        image: res.data.message,
      });
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };
  const submitHandler = async () => {
    setBlog({
      ...blog,
      content: content,
    });
    const res = await postBlog(blog);
    if (!res.data.error) {
      alert("Posted Successfully");
    }
  };
  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setContent(quill.root.innerHTML);
      });
    }
  }, [quill]);
  useEffect(() => {
    getImage();
  }, [file]);
  return (
    <Box>
    <Navbar createBlog={true} submitHandler={submitHandler} />
    <Box w="50%" m="20px auto" fontFamily="sans" position="relative">
      <Stack>
        <Img src={blog.image} objectFit="cover" />
        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={changeHandler}
          border="0"
          fontSize="35px"
          />
        <Select
          fontSize="18px"
          border="0"
          w="40%"
          name="category"
          onChange={changeHandler}
          >
          <option value="">Category</option>
          <option value="Tech">Tech</option>
          <option value="Personal">Personal</option>
          <option value="Food">Food</option>
        </Select>
        <Input
          type="file"
          position="absolute"
          left="-100px"
          w="100px"
          opacity="0"
          zIndex="10"
          onChange={(e) => setFile(e.target.files[0])}
          />
        <Img
          w="30px"
          src="https://cdn-icons-png.flaticon.com/128/3024/3024515.png"
          position="absolute"
          left="-50px"
          />
        <div>
          <div ref={quillRef} />
        </div>
      </Stack>
    </Box>
          </Box>
  );
};

export default CreateBlog;
