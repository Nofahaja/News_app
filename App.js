import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import React, { useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addnews, latenews,singlenews} from './Redux/Topnews';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  
  // height:800,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  
  
  
  // height:400,
 
  p: 4,
};


export default function App() {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const { news, top,single } = useSelector(state => state.newsreader.value)
  console.log("single", single);
  const dispatch = useDispatch()
  


  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f9ce96f2eb5f43e49e73e8ecf8cea315`).then(response => {
      console.log("response===>", response.data.articles)
      dispatch(addnews(response.data.articles))
    })
  }, [])
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=f9ce96f2eb5f43e49e73e8ecf8cea315`).then(response => {
      console.log("response===>", response.data.articles)
      const details =  response.data.articles
      console.log("slices",details.slice(5,100))
      dispatch(latenews(details.slice(5,100)))
    })
  }, [])
  
  
  return (
    <div>
      <Nav />
      <div className='imgbac'>
        <div className='sha'></div>
      </div>

      <div className='row'>


        <div className=' col-lg-4 icon'>
          <marquee>
            <p className='top'><b>TOP HEADLINES</b></p>
          </marquee>
          <div className='cards'></div>
          {news.map((head) => (
            <div className='card'>
              <p className='car'><span className='cl'><b> Author: </b></span>{head.author}</p>
              <p className='car'><span className='cl'><b> Title: </b></span>{head.title}</p>
              <p className='car'><span className='cl'><b>Published At: </b> </span>{head.publishedAt}</p>


            </div>
          ))}
        </div>



        <div className="col-lg-8  ion">
          <p className='top1'><b>TOP NEWS</b></p>
          <div className='row'>
            {top.map((ever) => (
              <div className=" col-lg-6 card1">
                <div className="card-image1">
                  <img src={ever.urlToImage} />

                </div>
                <div className="card-text1">
                  <p className="card-meal-type1"><b>Title: </b>{ever.title}</p>
                  <p className="card-meal-type1"><b>Content:</b> {ever.content}</p>
                  <p className="card-meal-type1"><b>Description:</b> {ever.description}</p>
                   <button className='Topbut' onClick={()=>{handleOpen();dispatch(singlenews(ever))}}><b>VIEW</b></button>

                </div>

              </div>

            ))}
          </div>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          <div class="row" style={{height:"80vh"}}>
          <div className='Genrediv3'>
        
      <div className="scrolling3">
       
       <div className='imagesscroll3'>
       <img src={single.urlToImage} className="scrollbac3" alt='' />
        <div className="cls3">
        <p className='scrolltit3'><span className='overspan3'>Title: </span> {single.title}</p> 
         
         <p className='scrolldat3'><span className='overspan3'> Content: </span> {single.content}</p> 
         <p className='scrollpop3'><span className='overspan3'> Description:</span> {single.description}</p> 
        
         </div>
        </div>
      </div>
        
    </div>
</div>

          
           </Typography>
        </Box> 
       </Modal>   
      

        </div>

      </div>


    </div>

  );
}


