import { React, useEffect, useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import portfolios from "../data/portfolio";
import Menu from "../Components/Menu";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import robPortfolio from "../data/robPortfolio";

const PortfoliosPage = ({ isDark }) => {
  const [navToggle, setNavToggle] = useState(true);

  const handleChange = (event, newToggle) => {
    setNavToggle(newToggle);
  };

  useEffect(() => {
    console.log(isDark);
  }, [isDark]);
  return (
    <MainLayout>
      <Title
        title={"Portfolios"}
        span={"portfolios"}
        style={{
          botto: 10,
          float: "left",
        }}
      />
      <ToggleButtonGroup
        color="primary"
        value={navToggle}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{
          float: "right",

          color: isDark ? "white" : "primary",
          backgroundColor: isDark ? "dark blue" : "white",
          borderColor: isDark ? "white" : "primary",
        }}
      >
        <ToggleButton value={true} sx={{ color: isDark ? "white" : "black" }}>
          Computer Science
        </ToggleButton>
        <ToggleButton sx={{ color: isDark ? "white" : "black" }} value={false}>
          Robotics
        </ToggleButton>
      </ToggleButtonGroup>

      <InnerLayout>
        {navToggle ? (
          <Menu menuItem={portfolios} />
        ) : (
          <Menu menuItem={robPortfolio} />
        )}
      </InnerLayout>
    </MainLayout>
  );
};

export default PortfoliosPage;
