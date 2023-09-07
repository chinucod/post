import React ,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';


const Container = styled.div`
display: flex;
padding: 20px;
align-items: center;
gap:20px;
flex-wrap: wrap;
background-color: #A6FF96;
`;
const Boxe = styled.div`
margin: 10px 0px;
`;
const Sp=styled.div` 
padding: 10px;
`;
const Home = () => {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
      console.log('posts', posts)
  }, []);
  return (
    <Container>
    {posts.map((item)=>(
        <Boxe>
            <Card sx={{height:300, backgroundColor:'#F3FDE7',borderRadius:5,width: 320}}>
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} gutterBottom variant='h1' component='div'>
                        {item.title}
                    </Typography>
                    <Sp></Sp>
                    <Typography variant='body2' color='text.secondary'>
                        {item.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div style={{ marginTop: 'auto' }}>
                        <Button sx={{color:'red'}}>Delete</Button>
                    </div>    
                </CardActions>
            </Card>
        </Boxe>
        ))}
        
    </Container>
  )
}

export default Home





