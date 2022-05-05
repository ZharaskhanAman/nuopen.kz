import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useWindowWidth } from "@react-hook/window-size";

import Time from "./time";
import { ResponsiveContainer, Heading, Subheading } from "./responsive";
import { sizes } from "../styles/media";
import theme from "../styles/theme";
import sr from "../utils/sr";

const schedule = [
  {
    number: "0.",
    time: "10:00 - 11:30",
    name: "Sending accounts, seating arragment",
  },
  {
    number: "1.",
    time: "12:00 - 17:00",
    name: "Epic battle",
  },
  {
    number: "2.",
    time: "18:00 - 19:00",
    name: "Closing ceremony",
  },
];

const prizes = [
  {
    number: "1.",
    place: "1-st place",
    prize: "210 000 tenge from Khan Group + 1Fit subscription",
  },
  {
    number: "2.",
    place: "2-nd place",
    prize: "150 000 tenge from Khan Group + 1Fit subscription",
  },
  {
    number: "3.",
    place: "3-rd place",
    prize: "90 000 tenge from Khan Group + 1Fit subscription",
  },
  {
    number: "1-6.",
    place: "1-6 place",
    prize: "Unique T-shirts from Khan Group",
  },
];

const FAQElements = [
  {
    question: "Where?",
    answer: "Competition will be held in KBTU address Tole-bi 59, Almaty. Entrance from Abylaykhan street side.",
  },
  {
    question: "What the heck is ICPC?",
    answer:
      "The International Collegiate Programming Contest is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.",
  },
  {
    question: "Who are eligible to participate?",
    answer: "The entire competition will be held both onsite and online and everyone is welcome to participate!",
  },
  {
    question: "How many people should be in a team?",
    answer: "Teams should be formed out of maximum 3 people.",
  },
  {
    question: "What kind of problems will we solve?",
    answer:
      "Have a look at <a href='https://codeforces.com/problemset/problem/4/A'>this</a> and <a href='https://acmp.ru/index.asp?main=task&id_task=1'>this</a>. These are some problems to get you familiar with the format.",
  },
  {
    question: "Who have prepared the problems?",
    answer:
      "All the problems are prepared by KBTU students and alumni",
  },
];

const FAQ = () => {
  const width = useWindowWidth();

  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, theme.srConfig()), []);

  return (
    <ResponsiveContainer id="faq" ref={width > 600 ? revealContainer : null}>
      <Heading>Schedule</Heading>
      <Subheading style={{ marginBottom: "60px" }}>15 May, KBTU</Subheading>
      {/* <Subheading style={{ marginBottom: "60px" }}>11 April - NU Library</Subheading> */}
      <InfoBlock>
        <TimeWrap>
          {schedule.map((element, index) => (
            <Time time={element.time} name={element.name} number={element.number} key={index} />
          ))}
        </TimeWrap>
      </InfoBlock>
      
      <Heading>Prizes</Heading>
      <Subheading style={{ marginBottom: "60px" }}>Only onsite participants are eligible for prizes.</Subheading>
      <InfoBlock>
        <TimeWrap style={{"flex-flow":"column"}}>
          {prizes.map((element, index) => (
            <Time time={element.place} name={element.prize} number={element.number} key={index} />
          ))}
        </TimeWrap>
      </InfoBlock>

      <Heading style={{ marginTop: "-30px" }}>FAQ</Heading>
      <Subheading style={{ marginBottom: "-20px" }}>Frequently Asked Questions</Subheading>
      <InfoBlock>
        {FAQElements.map((element, index) => (
          <QABlock key={index}>
            <p>
              0{index}. {element.question}
            </p>
            <p dangerouslySetInnerHTML={{ __html: element.answer }} />
          </QABlock>
        ))}
      </InfoBlock>
      
    </ResponsiveContainer>
  );
};

export default FAQ;

const TimeWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 50px;
  max-width: 1000px;
`;

const InfoBlock = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;

  &:nth-last-of-type(1) {
    margin-top: 50px;
  }
`;

const QABlock = styled.div`
  & > p {
    margin: 0;
    margin-bottom: 25px;

    & > a {
      color: ${theme.colors.lightGrey};
    }

    &:first-of-type {
      color: ${theme.colors.red};
      font-weight: bold;
    }

    &:nth-last-of-type(1) {
      color: ${theme.colors.lightGrey};
      max-width: ${sizes.desktop}px;
      line-height: 24px;
    }
  }
`;
