import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer GEe8wz1qfyz_sLAr4VoTP2-uCa9edqLpEvL_P-hRLMYaBUh-q9CbLk5sBjxWDpXyjDW8P6K2PfnSIQCENjn4ScEl2HlbZAZku5KKp1guzzafZWKCTjOVnaihhWWVYXYx'
    } 
});