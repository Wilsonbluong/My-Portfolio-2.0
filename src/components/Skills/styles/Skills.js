import styled from "styled-components/macro";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  margin: 0 auto 3rem auto;
  padding: 0 auto 3em auto;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0 3em 0;
    width: 360px;
    margin: 2.75em 0 3rem 0;
  }
`;

export const SkillTitle = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: black;
  height: 20px;
`;
