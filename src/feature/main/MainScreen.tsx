import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
  Button,
  Box,
  Chip,
  ThemeProvider,
  createTheme
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import {
  Work as WorkIcon,
  Star as StarIcon,
  GitHub as GitHubIcon,
  Article as ArticleIcon,
  Note as NoteAlt
} from '@mui/icons-material';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Deep blue
      light: '#42a5f5',
    },
    secondary: {
      main: '#f50057', // Vibrant accent
    },
    background: {
      default: '#f4f4f4',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          margin: '4px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
});

const PersonalWebsite = () => {
  const skills = [
    {
      name: 'Kotlin',
      color: '#7F52FF',  // Kotlin's brand color
      textColor: 'white'
    },
    {
      name: 'Android Studio',
      color: '#3DDC84',  // Android's green
      textColor: 'white'
    },
    {
      name: 'Spring Boot',
      color: '#6DB33F',  // Spring's green
      textColor: 'white'
    },
    {
      name: 'MySQL',
      color: '#4479A1',  // MySQL's blue
      textColor: 'white'
    },
    {
      name: 'Git',
      color: '#F1502F',  // Git's red-orange
      textColor: 'white'
    },
    {
      name: 'Python',
      color: '#3776AB',  // Python's blue
      textColor: 'white'
    }
  ];

  const experiences = [
    {
      title: '대구소프트웨어 마이스터고등학교 재학',
      period: '2024 - 현재',
      description: '안드로이드 개발자를 희망',
      icon: <WorkIcon color="primary" />,
    },
    {
      title: '대구소프트웨어 마이스터고등학교 재학',
      period: '2024 - 현재',
      description: '안드로이드 개발자를 희망',
      icon: <WorkIcon color="secondary" />,
    },
    {
      title: '대구소프트웨어 마이스터고등학교 재학',
      period: '2024 - 현재',
      description: '안드로이드 개발자를 희망',
      icon: <WorkIcon color="primary" />,
    }
  ];

  const portfolioLinks = [
    {
      name: 'Notion 포트폴리오',
      url: 'https://flint-plantain-41c.notion.site/a689e3dbc1c44c948d5d1914fe915d47?pvs=18',
      icon: <NoteAlt />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/tumblecat44',
      icon: <GitHubIcon />
    },
    {
      name: 'Velog 블로그',
      url: 'https://velog.io/@tumblecat/posts',
      icon: <ArticleIcon />
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Profile Header */}
          <Grid item xs={12} textAlign="center">
            <Avatar
              src="/myimg.png"
              sx={{
                width: 200,
                height: 200,
                margin: '0 auto 20px',
                border: '4px solid',
                borderColor: 'primary.main'
              }}
            />
            <Typography variant="h4" component="h1" gutterBottom>
              이건희 | LEE GEON-HUI
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              혁신적인 개발자 | 대구소프트웨마이스터고등학교 재학중
            </Typography>
          </Grid>

          {/* About Me */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  About Me
                </Typography>
                <Typography variant="body1" paragraph>
                  코틀린을 사용한 안드로이드 개발과 서버 개발을 공부하고 있습니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Skills */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  핵심 역량
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill.name}
                      label={skill.name}
                      sx={{
                        backgroundColor: skill.color,
                        color: skill.textColor,
                        '& .MuiChip-icon': { color: skill.textColor }
                      }}
                      icon={<StarIcon />}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>



          {/* Contact & Portfolio Links */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Contact & Portfolio
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 2
                  }}
                >
                  {portfolioLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="outlined"
                      color="primary"
                      startIcon={link.icon}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {/* Career Timeline */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  경력 여정
                </Typography>
                <Timeline>
                  {experiences.map((exp, index) => (
                    <TimelineItem key={exp.title}>
                      <TimelineSeparator>
                        <TimelineDot>{exp.icon}</TimelineDot>
                        {index < experiences.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6">{exp.title}</Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          {exp.period}
                        </Typography>
                        <Typography variant="body2">{exp.description}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default PersonalWebsite;