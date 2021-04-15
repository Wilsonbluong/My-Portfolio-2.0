import styled from "styled-components/macro";

export const SkillsContainer = styled.div`
  width: 370px;
  // margin: 0 auto;
  padding-bottom: 3em;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 0;
    margin-top: 2.75em;
  }
`;

export const SkillTitle = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: black;
  height: 20px;
`;
