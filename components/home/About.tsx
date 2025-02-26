/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Card, Grid, styled } from '@mui/material';
import { ResponsiveLayout, Section, Text } from '../common';
import HomeHead from './HomeHead';

type AboutProps = {};

const About = ({}: AboutProps) => {
  return (
    <Box>
      <HomeHead
        title="Endless Creation이란?"
        description="Endless Creation을 소개합니다"
        src="'https://images.unsplash.com/photo-1588269232168-d212b558cea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'"
      />

      <ResponsiveLayout>
        <Section>
          <Text className="title">31년 째 멈추지 않는 열정</Text>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} container justifyContent="center">
              <StatusCard elevation={3}>
                <Text className="title">1991년</Text>
                <Text className="description">창립일</Text>
              </StatusCard>
            </Grid>
            <Grid item xs={12} md={4} container justifyContent="center">
              <StatusCard elevation={3}>
                <Text className="title">60명</Text>
                <Text className="description">활동 멤버</Text>
              </StatusCard>
            </Grid>
            <Grid item xs={12} md={4} container justifyContent="center">
              <StatusCard elevation={3}>
                <Text className="title">123개</Text>
                <Text className="description">누적 프로젝트</Text>
              </StatusCard>
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Text className="title">풍부한 활동</Text>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ActivityCard
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                elevation={5}
              >
                <Box className="filter">
                  <Text className="title">다양한 분야의 사람들과 정보를 공유합니다.</Text>
                  <Text className="description">Networking</Text>
                </Box>
              </ActivityCard>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ActivityCard
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                elevation={5}
              >
                <Box className="filter">
                  <Text className="title">팀 프로젝트를 통해 협업 능력을 키웁니다.</Text>
                  <Text className="description">Project</Text>
                </Box>
              </ActivityCard>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ActivityCard
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                elevation={5}
              >
                <Box className="filter">
                  <Text className="title">현직자의 경험을 공유합니다.</Text>
                  <Text className="description">Invitation Seminar</Text>
                </Box>
              </ActivityCard>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ActivityCard
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                elevation={5}
              >
                <Box className="filter">
                  <Text className="title">뜻이 맞는 사람들과 함께 공부합니다.</Text>
                  <Text className="description">Study</Text>
                </Box>
              </ActivityCard>
            </Grid>
          </Grid>
        </Section>
      </ResponsiveLayout>
    </Box>
  );
};

export default About;

const StatusCard = styled(Card)(css`
  width: 70%;
  height: 9.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border-radius: 5px;

  & .title {
    font-size: 2rem;
    font-weight: bold;
  }

  & .description {
    margin-top: 0.5rem;
    font-size: 1.3rem;
  }
`);

const ActivityCard = styled(Card)<any>(
  ({ src }) => css`
    width: 100%;
    height: 12.5rem;
    background-image: url(${src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    & .filter {
      padding: 1.5rem;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.1) 100%);
    }

    & .title {
      width: 60%;
      font-size: 2rem;
      color: white;
    }

    & .description {
      font-size: 1.2rem;
      color: white;
    }
  `,
);
