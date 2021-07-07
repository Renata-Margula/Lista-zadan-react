import React from "react";
import { StyledSection, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      {title}
      {extraHeaderContent}
    </Header>
    <div>
      {body}
    </div>
  </StyledSection>
);

export default Section;