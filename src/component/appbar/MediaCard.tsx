// MediaCard.tsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// 추가된 부분: 부모 컴포넌트에게 공유하기 클릭을 알리기 위한 props
interface MediaCardProps {
  onCopy: () => void;
}

export default function MediaCard({ onCopy }: MediaCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://blog.kakaocdn.net/dn/GSWaD/btr0gB0teLR/1W4YO2IXCHoDVcpca9HHGK/img.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          환영합니다.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          이건희.store 에 오신것을 환영합니다. 이 사이트는 이건희의 포트폴리오 사이트입니다.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onCopy}>공유하기</Button>
        <Button size="small">더 알아보기</Button>
      </CardActions>
    </Card>
  );
}
