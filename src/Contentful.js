import {createClient} from 'contentful'

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

//This values of space and accesstoken are generated in the contentful page