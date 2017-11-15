# Spotify Search
Simple Spotify Search using the Spotify Web API helper.

!Note currently only returning tracks from the searched artist --> other implementations later


## Spotify API
Because we are using the Spotify API you need a Spotify account. It could be a new free account or your existing account (no extra permissions needed). You can see more details about the API [here](https://developer.spotify.com/web-api/).

The [Spotify web API](https://github.com/JMPerez/spotify-web-api-js) helper is already included, so you can easily query for the different types of data you want. Check the [repo](https://github.com/JMPerez/spotify-web-api-js) for more details on how to.

You can import and use the Spotify web API helper by importing it in the JS file like so:
```
import spotifyApi from 'utils/spotify'
```

#### Download repository
You can download the repo to your local machine and follow the next instructions to get everything up and running.

#### Installing dependencies
```
npm install
```

#### Start development server
```
npm start
```
The server will start at [localhost:1337](http://localhost:1337)
You can edit the JS files at `./src/js` and the sass files at `./src/css`. After making changes to the files the server will automatically reload the page. If you want to make changes to the HTML file you can find it at `./dist/index.html`.

#### Start build
```
npm run build
```
This will generate all the files needed for a full exported build. For convenience it also starts up a server to easily test the build.

### References
- [React docs](https://reactjs.org/docs/hello-world.html)
- [Spotify API docs](https://developer.spotify.com/web-api/)
- [Spotify web API helper docs](https://github.com/JMPerez/spotify-web-api-js)
- [SASS docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
