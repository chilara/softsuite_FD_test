import React from "react";
import {
  Text,
  Box,
  Button,
  chakra,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";
import group from "../../assets/group.png";
import dashboard from "../../assets/dashboard.png";
import payroll from "../../assets/payroll.png";
import structure from "../../assets/structure.png";
import setting from "../../assets/setting.png";
import user from "../../assets/user.png";
import settingGrey from "../../assets/settingGrey.png";
import Profile from "../../assets/Profile.png";
import Logout from "../../assets/Logout.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* switch module */}
      <Accordion allowToggle margin={"3% 5%"} width={"90%"}>
        <AccordionItem borderTop={"none"} borderBottom={"none"}>
          <h2>
            <AccordionButton
              padding={"8px"}
              display={"flex"}
              gap={".8rem"}
              justifyContent={"space-around"}
              _hover={{
                transform: "scale(1.02)",
                bg: "#FFF",
              }}
            >
              <img src={group} alt="group" className="img_group" />
              <Flex flexDir={"column"} alignItems={"flex-start"}>
                <Text color={"#2D416F"} fontSize={"16px"} fontWeight={500}>
                  Switch module
                </Text>
                <Text color={"#2D416F"} fontSize={"16px"} fontWeight={700}>
                  Payroll Management
                </Text>
              </Flex>
              <AccordionIcon color={"#2D416F"} />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            color={"#57678c"}
            fontWeight={500}
            mx={9}
            mt={"1rem"}
            borderBottom={"0.1px solid #DFDFDF"}
          >
            System Administration
          </AccordionPanel>
          <AccordionPanel
            pb={4}
            color={"#57678c"}
            mx={9}
            fontWeight={500}
            borderBottom={"0.1px solid #DFDFDF"}
          >
            People Management
          </AccordionPanel>
          <AccordionPanel
            pb={4}
            color={"#57678c"}
            mx={9}
            fontWeight={500}
            borderBottom={"0.1px solid #DFDFDF"}
          >
            Payroll Management
          </AccordionPanel>
          <AccordionPanel
            pb={4}
            color={"#57678c"}
            mx={9}
            fontWeight={500}
            borderBottom={"0.1px solid #DFDFDF"}
          >
            Self Service
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {/* Dashboard */}
      <Button
        display={"flex"}
        mx={"5%"}
        width={"90%"}
        gap={"1rem"}
        mt={"1.5rem"}
        justifyContent={"flex-start"}
        bg={"transparent"}
        _hover={{
          transform: "scale(1.02)",
          bg: "#A1CCD1",
        }}
      >
        <img src={dashboard} alt="dashboard" className="img_input" />
        <Text color={"#818DA9"} fontSize={"16px"} fontWeight={500}>
          Dashboard
        </Text>
      </Button>
      {/* Payroll Activities */}
      <Accordion allowToggle margin={"3%"} width={"90%"} mt={"1.5rem"}>
        <AccordionItem borderTop={"none"} borderBottom={"none"}>
          <h2>
            <AccordionButton
              padding={"8px"}
              display={"flex"}
              // gap={"1rem"}
              justifyContent={"space-between"}
              borderRadius={"5px"}
              mx={2}
              _hover={{
                transform: "scale(1.02)",
                bg: "#A1CCD1",
              }}
              _expanded={{
                bg: "#A1CCD1",
                color: "#2d416f",
                width: "80%",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              <Flex gap={"1rem"} alignItems={"center"}>
                <img src={payroll} alt="payroll" className="img_input" />
                <Text color={"#818DA9"} fontSize={"16px"} fontWeight={500}>
                  Payroll Activities
                </Text>
              </Flex>
              <AccordionIcon color={"#2D416F"} />
            </AccordionButton>
          </h2>
          <Box bg={"#f4f6f8"} borderRadius={"5px"} mt={"1rem"} width={"80%"}>
            <AccordionPanel
              pb={4}
              color={"#57678c"}
              fontWeight={500}
              mt={"1rem"}
            >
              Payroll Run
            </AccordionPanel>
            <AccordionPanel pb={4} color={"#57678c"} fontWeight={500}>
              Payroll Reversal
            </AccordionPanel>
            <AccordionPanel pb={4} color={"#57678c"} fontWeight={500}>
              Payroll History
            </AccordionPanel>
            <AccordionPanel pb={4} color={"#57678c"} fontWeight={500}>
              Payroll Lock
            </AccordionPanel>
            <AccordionPanel pb={4} color={"#57678c"} fontWeight={500}>
              Enable Payslip
            </AccordionPanel>
            <AccordionPanel pb={4} color={"#57678c"} fontWeight={500}>
              Payroll Log
            </AccordionPanel>
            <AccordionPanel pb={4} color={"#57678c"} fontWeight={500}>
              Payroll Approval
            </AccordionPanel>
          </Box>
        </AccordionItem>
      </Accordion>
      {/* Salary Structure */}
      <Button
        display={"flex"}
        mx={"5%"}
        width={"90%"}
        gap={"1rem"}
        mt={"2rem"}
        justifyContent={"flex-start"}
        bg={"transparent"}
        _hover={{
          transform: "scale(1.02)",
          bg: "#A1CCD1",
        }}
      >
        <img src={structure} alt="structure" className="img_input" />
        <Text color={"#818DA9"} fontSize={"16px"} fontWeight={500}>
          Salary Structure
        </Text>
      </Button>
      {/* Element Setup */}
      <Accordion allowToggle margin={"3%"} width={"90%"} mt={"1.5rem"}>
        <AccordionItem borderTop={"none"} borderBottom={"none"}>
          <h2>
            <AccordionButton
              padding={"8px"}
              display={"flex"}
              gap={"1rem"}
              borderRadius={"5px"}
              bg={"#4BAA79"}
              color={"#fff"}
              justifyContent={"space-between"}
              mx={2}
              _hover={{
                transform: "scale(1.02)",
                bg: "#4BAA79",
              }}
              _expanded={{
                bg: "#4BAA79",
                color: "#fff",

                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              <Flex gap={"1rem"} alignItems={"center"}>
                <img src={setting} alt="setting" className="img_setting" />
                <Text color={"#fff"} fontSize={"16px"} fontWeight={500}>
                  Element Setup
                </Text>
              </Flex>
              <AccordionIcon color={"#fff"} />
            </AccordionButton>
          </h2>

          <AccordionPanel
            pb={4}
            color={"#57678c"}
            fontWeight={500}
            bg={"#F3FFF1"}
            borderRadius={"6px 6px 0px 0px"}
            mt={"1rem"}
            width={"80%"}
          >
            Elements
          </AccordionPanel>
          <AccordionPanel pb={4} color={"#57678c"} fontWeight={500}>
            Balances
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {/* Employees */}
      <Button
        display={"flex"}
        mx={"5%"}
        width={"90%"}
        gap={"1rem"}
        mt={"2rem"}
        justifyContent={"flex-start"}
        bg={"transparent"}
        _hover={{
          transform: "scale(1.02)",
          bg: "#A1CCD1",
        }}
      >
        <img src={user} alt="user" className="img_input" />
        <Text color={"#818DA9"} fontSize={"16px"} fontWeight={500}>
          Employees
        </Text>
      </Button>
      <chakra.hr allowToggle margin={"3% 5%"} width={"90%"} mt={"2rem"} />
      {/* Payroll setting */}
      <Accordion allowToggle margin={"3%"} width={"90%"} mt={"2rem"}>
        <AccordionItem borderTop={"none"} borderBottom={"none"}>
          <h2>
            <AccordionButton
              padding={"8px"}
              display={"flex"}
              gap={"1rem"}
              mx={2}
              justifyContent={"space-between"}
              borderRadius={"5px"}
              _hover={{
                transform: "scale(1.02)",
                bg: "#A1CCD1",
              }}
              _expanded={{
                bg: "#A1CCD1",
                color: "#2d416f",

                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              <Flex gap={"1rem"} alignItems={"center"}>
                <img
                  src={settingGrey}
                  alt="settingGrey"
                  className="img_input"
                />
                <Text color={"#818DA9"} fontSize={"16px"} fontWeight={500}>
                  Payroll Settings
                </Text>
              </Flex>
              <AccordionIcon color={"#2D416F"} ml={"25%"} />
            </AccordionButton>
          </h2>
          <Box bg={"#f4f6f8"} borderRadius={"5px"} mt={"1rem"} width={"80%"}>
            <AccordionPanel
              pb={4}
              color={"#57678c"}
              fontWeight={500}
              mt={"1rem"}
            >
              Payroll Options
            </AccordionPanel>
            <AccordionPanel pb={4} color={"#57678c"} fontWeight={500}>
              Deduction Account Setup
            </AccordionPanel>
            <AccordionPanel pb={4} color={"#57678c"} fontWeight={500}>
              Variation Portal Period
            </AccordionPanel>
            <AccordionPanel pb={4} color={"#57678c"} fontWeight={500}>
              Paygroup Setup
            </AccordionPanel>
            <AccordionPanel pb={4} color={"#57678c"} fontWeight={500}>
              Tax Setup
            </AccordionPanel>
          </Box>
        </AccordionItem>
      </Accordion>
      {/* My Account */}
      <Button
        display={"flex"}
        mx={"5%"}
        width={"90%"}
        gap={"1rem"}
        mt={"1.5rem"}
        justifyContent={"flex-start"}
        bg={"transparent"}
        _hover={{
          bg: "transparent",
        }}
        cursor={"default"}
      >
        <img src={Profile} alt="profile" className="img_input" />
        <Text color={"#818DA9"} fontSize={"16px"} fontWeight={500}>
          My Account
        </Text>
      </Button>
      {/* Logout  */}
      <Button
        display={"flex"}
        mx={"5%"}
        width={"90%"}
        gap={"1rem"}
        mt={"1.5rem"}
        justifyContent={"flex-start"}
        bg={"transparent"}
        _hover={{
          bg: "transparent",
        }}
        cursor={"default"}
      >
        <img src={Logout} alt="Logout" className="img_input" />
        <Text color={"#818DA9"} fontSize={"16px"} fontWeight={500}>
          Logout
        </Text>
      </Button>
    </div>
  );
};

export default Sidebar;
