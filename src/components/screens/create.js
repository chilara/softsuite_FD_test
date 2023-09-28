import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Box,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";

const Create = ({ isOpen, onClose }) => {
  const initialValues = {
    user_name: "",
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email address is required")
      .email("Enter a valid email address"),
    user_name: yup.string().required("Name is required"),
  });
  return (
    <div>
      <Modal backgroundColor={"green"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxWidth={"55%"}
          height={"100vh"}
          mt={"0"}
          position={"fixed"}
          padding={"2px 40px"}
        >
          <ModalHeader
            color={"#2D416F"}
            fontSize={"24px"}
            fontWeight={700}
            lineHeight={"normal"}
          >
            Create Element
          </ModalHeader>

          <ModalBody>
            <Flex
              justifyContent={"center"}
              gap={"8rem"}
              alignItems={"center"}
              mt={".5rem"}
            >
              <Text fontSize={"16px"} fontWeight={600} color={"#4baa79"}>
                Element Details
              </Text>
              <Text color={"#818DA9"} fontSize={"16px"} fontWeight={600}>
                Additional Details
              </Text>
            </Flex>
            <Flex
              height={"40px"}
              mt={"1rem"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box width={"212px"} height={"3px"} bgColor={"#4baa79"}></Box>
              <Box
                width={"40px"}
                height={"40px"}
                bgColor={"#4baa79"}
                borderRadius={"50%"}
                color={"#fff"}
                textAlign={"center"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                1
              </Box>
              <Box width={"212px"} height={"3px"} bgColor={"#CDCDCD"}></Box>
              <Box
                width={"40px"}
                height={"40px"}
                border={"1px solid #4baa79"}
                borderRadius={"50%"}
                color={"#4baa79"}
                textAlign={"center"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                2
              </Box>
              <Box width={"212px"} height={"3px"} bgColor={"#CDCDCD"}></Box>
            </Flex>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                console.log(values);
                var config = {
                  method: "post",
                  url: "https://jwt-project.onrender.com/register",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  data: values,
                };

                // try {
                //   const response = await axios(config);
                //   console.log(JSON.stringify(response.data));
                //   localStorage.setItem("token", response.data.token);
                // } catch (error) {
                //   console.log(error);
                // }
                // axios(config)
                //   .then(function (response) {
                //     console.log(JSON.stringify(response.data));
                //   })
                //   .catch(function (error) {
                //     console.log(error);
                //   });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                setFieldTouched,
                isSubmitting,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "2rem",
                      width: "100%",
                      marginTop: "1.3rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        gap: "8px",
                      }}
                    >
                      <label style={{ color: "#818DA9", fontSize: "14px" }}>
                        Name
                      </label>
                      <input
                        type="text"
                        value={values.user_name}
                        placeholder="Input Name"
                        name="user_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          outline: "none",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          padding: "16px",
                          color: "#818DA9",
                          border: "1px solid #E5E5E5",
                          fontSize: "16px",
                        }}
                      />
                      <small
                        style={{
                          display: "block",
                          color: "#E05453",
                          fontSize: "12px",
                          fontWeight: "500",
                          paddingLeft: "3px",
                        }}
                      >
                        {touched.user_name && errors.user_name}
                      </small>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        gap: "8px",
                      }}
                    >
                      <label style={{ color: "#818DA9", fontSize: "14px" }}>
                        Element Classification
                      </label>
                      <select
                        style={{
                          outline: "none",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          padding: "16px",
                          color: "#818DA9",
                          border: "1px solid #E5E5E5",
                          fontSize: "16px",
                        }}
                      >
                        <option value="">Select Classification</option>
                        <option value="saab">Pre-Tax Deduction</option>
                        <option value="opel">Non-Taxable Earning</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "100%", gap: "2rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        gap: "8px",
                      }}
                    >
                      <label style={{ color: "#818DA9", fontSize: "14px" }}>
                        Element Category
                      </label>
                      <select
                        style={{
                          outline: "none",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          padding: "16px",
                          color: "#818DA9",
                          border: "1px solid #E5E5E5",
                          fontSize: "16px",
                        }}
                      >
                        <option value="">Select Element Category</option>
                        <option value="Deduction">Deduction</option>
                      </select>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        gap: "8px",
                      }}
                    >
                      <label style={{ color: "#818DA9", fontSize: "14px" }}>
                        Payrun
                      </label>
                      <select
                        style={{
                          outline: "none",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          padding: "16px",
                          color: "#818DA9",
                          border: "1px solid #E5E5E5",
                          fontSize: "16px",
                        }}
                      >
                        <option value="">Select Payroll</option>
                        <option value="saab">Weekly Run</option>
                        <option value="opel">Monthly Run</option>
                        <option value="audi">Yearly Run</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "100%", gap: "2rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        gap: "8px",
                      }}
                    >
                      <label style={{ color: "#818DA9", fontSize: "14px" }}>
                        Description
                      </label>
                      <textarea
                        style={{
                          outline: "none",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          padding: "16px",
                          color: "#818DA9",
                          border: "1px solid #E5E5E5",
                          fontSize: "16px",
                        }}
                        placeholder="Input Description"
                      ></textarea>
                      <small
                        style={{
                          display: "block",
                          color: "#E05453",
                          fontSize: "12px",
                          fontWeight: "500",
                          paddingLeft: "3px",
                        }}
                      >
                        {touched.password && errors.password}
                      </small>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "100%", gap: "2rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        gap: "8px",
                      }}
                    >
                      <label style={{ color: "#818DA9", fontSize: "14px" }}>
                        Reporting Name
                      </label>
                      <textarea
                        style={{
                          outline: "none",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          padding: "16px",
                          color: "#818DA9",
                          border: "1px solid #E5E5E5",
                          fontSize: "16px",
                        }}
                        placeholder="Input Reporting Name"
                      ></textarea>
                      <small
                        style={{
                          display: "block",
                          color: "#E05453",
                          fontSize: "12px",
                          fontWeight: "500",
                          paddingLeft: "3px",
                        }}
                      >
                        {touched.password && errors.password}
                      </small>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      gap: "2rem",
                      marginTop: "1.4rem",
                    }}
                  >
                    <button
                      style={{
                        color: "#4BAA79",
                        padding: "16px",
                        lineHeight: "150%",
                        border: "2px solid  #4BAA79",
                        borderRadius: "4px",
                        cursor: "pointer",
                        width: "50%",
                      }}
                      type="submit"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      style={{
                        backgroundColor: "#4BAA79",
                        color: "white",
                        padding: "16px",
                        lineHeight: "150%",
                        border: "2px solid  #4BAA79",
                        borderRadius: "4px",
                        cursor: "pointer",
                        width: "50%",
                      }}
                      type="submit"
                    >
                      Next
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Create;
