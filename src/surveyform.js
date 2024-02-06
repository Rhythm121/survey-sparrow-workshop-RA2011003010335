// SurveyForm.js
import React, { useState } from "react";
import { Flex, ThemeProvider, Label, Input, Select, TextArea, Button } from "@sparrowengg/twigs-react";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission, e.g., send data to server
    console.log("Form data submitted:", formData);
  };

  return (
    <ThemeProvider theme={{
      fonts: {
        body: "'DM sans', sans-serif"
      }
    }}>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        css={{ height: "100vh" }}
      >
        <h1>Survey Form</h1>
        <form onSubmit={handleSubmit} style={{ width: "400px" }}>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            mb={3}
          />

          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            mb={3}
          />

          <Label htmlFor="rating">Rating:</Label>
          <Select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            mb={3}
          >
            <option value="" disabled>Select rating</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </Select>

          <Label htmlFor="feedback">Feedback:</Label>
          <TextArea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            mb={3}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Flex>
    </ThemeProvider>
  );
};

export default SurveyForm;
