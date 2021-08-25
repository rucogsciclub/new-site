import React from "react";
import PageContainer from "../../components/Content";
import DefaultPageTitle from "../../components/PageTitle";
import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";
import MainPage from "../../components/Page";

const PageTitle = styled(DefaultPageTitle)`
  margin-bottom: 14px;
`;

const CalendarTabsContainer = styled.div`
  background: rgba(227, 230, 239, 0.5);
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  width: fit-content;
  height: 72px;
  display: flex;
  margin-bottom: 54px;
  cursor: pointer;
`;

const CalendarTabContainer = styled.div`
  line-height: 72px;
  padding: 0 48px;
  position: relative;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;

  & + & {
    border-left: 0.3px solid #aaaaaa;
  }
`;

const CalendarTabSelected = styled(motion.div)`
  background: #cc0033;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.31);
  border-radius: 18px;
  z-index: 1;
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  bottom: 0;
  z-index: 1;
`;

const CalendarTabText = styled.span`
  display: block;
  position: relative;
  z-index: 1;
  color: ${(p) => (p.selected ? "white" : "black")};
  transition: 0.2s ease color;
`;

const CalendarTab = ({ children, isSelected, onClick }) => {
  return (
    <CalendarTabContainer onClick={onClick}>
      {isSelected && <CalendarTabSelected layoutId="selected" />}
      <CalendarTabText selected={isSelected}>{children}</CalendarTabText>
    </CalendarTabContainer>
  );
};

const CalendarEventContainer = styled.div`
  display: flex;

  & + & {
    margin-top: 45px;
  }
`;

const DateContainer = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 30px;
  color: ${(p) => (p.active ? "#4083f0" : "#1c1c1c")};
  text-transform: lowercase;
  border: 2px solid ${(p) => (p.active ? "#4083f0" : "#1c1c1c")};
  border-radius: 2px;
  text-align: center;
  justify-content: center;
`;

const DateContainerDay = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
`;

const CalendarEventStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 21px;
  flex: 1;
`;

const CalendarEventTitle = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  color: #000000;
`;

const CalendarEventDesc = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 28px;
  color: #000000;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  margin-right: -80px;
`;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalendarLeft = styled.div`
  max-width: 950px;
`;

const ReminderCardContainer = styled.div`
  background: #f8f8f8;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.11);
  border-radius: 3px 0 0 3px;
  padding: 24px;
  width: 285px;
  max-width: 285px;
  flex: 1;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const ReminderCardTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140.62%;
  color: #1c1c1c;
  margin-bottom: 7px;
  max-width: 200px;

  & > * + * {
    margin-top: 8px;
  }
`;

const ReminderCardDesc = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140.62%;
  color: #1c1c1c;
  max-width: 200px;
`;

const ReminderCardMeta = styled.div`
  width: 72px;
  height: 72px;
  margin-bottom: 7px;
`;

const ReminderCard = ({ title, meta, desc }) => {
  return (
    <ReminderCardContainer>
      <ReminderCardTitle>{title}</ReminderCardTitle>
      <ReminderCardMeta> {meta} </ReminderCardMeta>
      <ReminderCardDesc>{desc}</ReminderCardDesc>
    </ReminderCardContainer>
  );
};

const CalendarEvent = ({
  day = 0,
  dayOfWeek = 0,
  month = 0,
  title = "",
  desc = "",
  active = false,
}) => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const months = ["Jan", "Feb", "Mar", "Apl", "May", "Jne", "Jly", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <CalendarEventContainer>
      <DateContainer active={active}>
        {months[month]}
        {/*{daysOfWeek[dayOfWeek]} This is hardcoded text, kind of useless if theres no month*/}
        <DateContainerDay>{(day + "").padStart(2, "0")}</DateContainerDay>
      </DateContainer>
      <CalendarEventStack>
        <CalendarEventTitle>{title}</CalendarEventTitle>
        <CalendarEventDesc>{desc}</CalendarEventDesc>
      </CalendarEventStack>
    </CalendarEventContainer>
  );
};

const Calendar = () => {
  const categories = ["Upcoming", "Past", "Center of Cognitive Science", "All"];
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [calendarEvents, setCalendarEvents] = React.useState([
    {
      day: 8,
      month: 8, /*Remember that months are by index, so september would be 9-1, so 8 would be the input! */
      title: "General Interest Meeting",
      desc:
        "Come through to our new room in the Busch Student Center (Room 117) and hear about the club. Learn about the events we do, sign up for our email chain, meet some of the team, and learn about our mentoring program. Hope to see you all there!",
    },
    {
      day: 15,
      month: 8,
      title: "Speaker Series Event with: [REDACTED]",
      desc:
        "Come through to hear our first speaker event with [REDACTED]! Hear about whats going on in the Cog Sci community as well as the research and work of [REDACTED]. A great way to network and keep up to date with the industry and research community!",
    },
  ]);

  return (
    <MainPage>
      <PageContainer>
        <CalendarContainer>
          <CalendarLeft>
            <PageTitle>Calendar</PageTitle>
            <AnimateSharedLayout>
              <CalendarTabsContainer>
                {categories.map((category, index) => (
                  <CalendarTab
                    isSelected={index === selectedIndex}
                    onClick={() => {
                      setSelectedIndex(index);
                    }}
                  >
                    {category}
                  </CalendarTab>
                ))}
              </CalendarTabsContainer>
            </AnimateSharedLayout>
            {calendarEvents.map((event, index) => (
              <CalendarEvent
                day={event.day}
                month = {event.month}
                /*dayOfWeek={event.dayOfWeek} Commenting this out for future use*/
                title={event.title}
                desc={event.desc}
                active={index === 0}
              />
            ))}
          </CalendarLeft>
          <StickyContainer>
            <ReminderCard
              title={
                <span>
                  Google Calendar? <br /> Say less
                </span>
              }
              meta={<img src="google-calendar.png" />}
              desc="Add us for scheduled reminders on meetings and events!"
            />
          </StickyContainer>
        </CalendarContainer>
      </PageContainer>
    </MainPage>
  );
};

export default Calendar;
