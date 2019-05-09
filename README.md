# USS BG Frontend Intern Tasks 
![Project Banner](https://github.com/nedislavd/ussbg-frontend-trainee/blob/master/public/img/ussbg-frontend-internship-banner.png)

## Tasks can be found in the ``/Tasks`` Folder

### Installation
 - Open a command prompt and navigate inside the main repository directory, where `package.json` resides
 
    `/ussbg-frontend-trainee`
 - Run the following command:
 
    ```
    npm install
    ```

### Start Dev Server
 - Open a command prompt and navigate inside the main repository directory, where `package.json` resides
    
    `/ussbg-frontend-trainee`
 - Run the following command:
 
    ```
    npm start
    ```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
