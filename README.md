Heros is a React application that allows you to browse and view information about different heroes. It utilizes the HeroContext to manage the hero data and provides pagination functionality to display heroes in batches of 5.

## Features

- Display a list of heroes with their images and nicknames.
- Navigate through the list using the "Next" and "Previous" buttons.
- Show or hide the "Previous" button based on the current page.
- Retrieve hero data from a data source using the `getAllHeros` function.
- Limit the number of heroes displayed to 5 per page.
- Changed heroes
- Create heroes
- Delete heroes

## Installation

1. Clone the repository:

git clone https://github.com/vadosik15/Heros.git


2. Navigate to the project directory:

cd Heros

3. open 2 termina

4 first terminal ( cd back-heros) (npm i)

5 second terminal ( cd front-heros) (npm i)

6 after this in bouth terminal write (npm start)



The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- Upon launching the application, you will see a list of heroes.
- Click the "Next" button to load the next 5 heroes.
- If available, the "Previous" button will appear allowing you to view the previous 5 heroes.
- The "Previous" button will be hidden on the first page.
- Button Create that create new hero with your information
- Button Home , open list with heroes

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Router: Library for handling navigation and routing within a React application.
- HeroContext: Custom context for managing hero data.
- HTML: Markup language for creating the structure of the application.
- CSS: Styling language for enhancing the appearance of the application.

## Contributing

Contributions to Heros are welcome! If you have any bug fixes, enhancements, or new features to propose, please submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.
