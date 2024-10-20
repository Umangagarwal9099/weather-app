import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.webp?a=1&b=1&s=612x612&w=0&k=20&c=jc45vpqNDgrvRZAn2foO82IhW9rUeXbQfxvLZaDW8H8=";
  
    return (
     <div className="InfoBox">
      <br />
      <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
           <CardMedia
          sx={{ height: 140 }}
          image= {
            info.humidity > 80 
            ? RAIN_URL 
            : info.temp > 15 
            ? HOT_URL 
            : COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {info.city}
         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature: {info.temp}&deg;C</div>
          <div>HUmidity: {info.humidity}</div>
          <div>Min Temp: {info.tempMin}&deg;C</div>
          <div>Max Temp: {info.tempMax}&deg;C</div>
          <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</div>
         </Typography>
       </CardContent>
       </Card>
     </div>
   </div>
    );
}