
# Movie Image Display

This project is a simple web application that uses the TV Maze API to fetch and display images of movies. The main functionality of the application is to search for movies and display their poster images.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/movie-image-display.git
    cd movie-image-display
    ```

2. **Install dependencies:**

    For the server-side (if applicable):
    ```bash
    npm install
    ```

    For the client-side:
    ```bash
    # No additional dependencies needed if using vanilla HTML/CSS/JS
    ```

3. **Start the application:**

    ```bash
    npm start
    ```

    Or open `index.html` directly in your browser if it's a static site.

## Usage

1. **Open the application:**

    Navigate to `http://localhost:3000` in your browser if running a local server, or open `index.html` directly.

2. **Search for a movie:**

    Use the search bar to enter the name of the movie you are looking for.

3. **View the movie image:**

    The application will display the poster image of the movie fetched from the TV Maze API.

## Features

- **Search Functionality:** Users can search for movies by their names.
- **Image Display:** Displays the poster image of the searched movie.
- **Responsive Design:** Ensures the website is usable on various devices and screen sizes.

## API Reference

This application uses the [TV Maze API](https://www.tvmaze.com/api) to fetch movie data.

### Endpoints

- **Search for a movie:**

    ```http
    GET http://api.tvmaze.com/search/shows?q=:query
    ```

    **Parameters:**
    - `query`: The name of the movie to search for.

## Contributing

1. **Fork the repository.**

2. **Create a new branch:**

    ```bash
    git checkout -b feature-name
    ```

3. **Make your changes and commit them:**

    ```bash
    git commit -m 'Add some feature'
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature-name
    ```

5. **Create a pull request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [TV Maze API](https://www.tvmaze.com/api) for providing the movie data.
- Inspiration and guidance from various online resources and tutorials.
