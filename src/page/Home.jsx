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
const Input = styled.div`
  display: flex;
  align-items: center;
  position: absolute; 
  top: 10px; 
  left: 10px; 
`;

const Home = () => {
    const [inputValue,setInputValue]=useState('');
    const [id,setId]=useState('');
    const [open,setOpen]=useState(false);
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState((localStorage.getItem("search")));
    const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  const handleDeleteClick = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };
  const handleId=(id)=>{
      setId(id)
      setOpen(!open)
  }
  localStorage.setItem("search",searchQuery);

  return (
    
    <div>
    {open && (
      <div className="popup">
    <div className="popup-content">
      
      <h2>{id}</h2>
      <input
        type="text"
        placeholder="Enter something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button  onClick={()=>{setOpen(!open)}} >Close</button>
    </div>
  </div>
    )}
    <Input>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={() => setSearchQuery('')}>Clear</button>
      <button onClick={() => setSearchQuery(searchQuery)}>Search</button>
    </Input>
    <Container>
      {filteredPosts.map((item) => (
        <Boxe style={{cursor:'pointer'}} onClick={()=>{handleId(item.id)}}>
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
                        <Button sx={{color:'red'}} onClick={()=>handleDeleteClick(item.id)}>Delete</Button>
                    </div>    
                </CardActions>
            </Card>
        </Boxe>
        ))}
        
    </Container>
    </div>
  )
}

export default Home





