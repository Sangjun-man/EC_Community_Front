/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Card, styled } from '@mui/material';
import { Activity } from '../../types';
import { TagList, Text } from '../common';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({ activity, ...props }: { activity: Activity; [k: string]: any }) => {
  return (
    <CardWrapper {...props} elevation={4}>
      <img className="image" src={activity.image || ''} alt=""></img>
      <Box className="info">
        <Text className="title">{activity.title}</Text>
        <TagList tags={activity.skills} />
        <Text className="description">{activity.description}</Text>
        <a href={activity.source || ''} target="_black" className="source">
          <GitHubIcon />
        </a>
      </Box>
    </CardWrapper>
  );
};

export default ProjectCard;

const CardWrapper = styled(Card)(css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  height: 25rem;
  transition: all 0.5s ease;
  cursor: pointer;

  & .image {
    width: 100%;
    height: 12.5rem;
    object-fit: contain;
  }

  & .info {
    width: 100%;
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    & .title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    & .description {
      margin-top: 1rem;
      font-size: 0.9rem;
      color: #444444;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 1rem;
      max-height: 3rem;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    & .source {
      margin-top: auto;
    }
  }

  &:hover {
    transform: scale(1.02);
  }
`);
