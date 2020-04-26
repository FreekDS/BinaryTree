# BinaryTree Visualizer
Small React web application to visualize binary trees. | [website](https://freekds.github.io/BinaryTree) <br><br>
![Deployment](https://github.com/FreekDS/BinaryTree/workflows/Deploy%20to%20github%20pages/badge.svg) <br>

## Information
Binary trees can be created with either integer numbers or names (strings).
Numbers are stored numerically in the Binary Search Tree, strings alphabetical.

![BST example](https://i.imgur.com/UyFku44.png)

### Project structure
- [`.github/workflows/`](https://github.com/FreekDS/BinaryTree/tree/master/.github/workflows): contains the file for the CI/CD action.
- [`public/`](https://github.com/FreekDS/BinaryTree/tree/master/public): contains public assets for the web application.
- [`src/`](https://github.com/FreekDS/BinaryTree/tree/master/src): contains all the source files.
  - [`src/components/`](https://github.com/FreekDS/BinaryTree/tree/master/src/components): contains the React components used for this project.
  - [`src/style/`](https://github.com/FreekDS/BinaryTree/tree/master/src/style): contains the css files and assets for the layout of the web application.
  - [`src/tree-lib/BinaryTree.js`](https://github.com/FreekDS/BinaryTree/tree/master/src/tree-lib/BinaryTree.js): file that contains Binary Tree data structure.
  - `other files`: the other files are created by React except for the [config.js](https://github.com/FreekDS/BinaryTree/tree/master/src/config.js) file which contains the configuration for the graph display.
- [`package.json`](https://github.com/FreekDS/BinaryTree/tree/master/package.json): file that contains all dependencies for this project.

## Local installation
In order to install and run the project locally, use the following steps:
1. Clone this repository using `git clone https://github.com/FreekDS/BinaryTree.git`
2. Make sure Node package manager (npm) or yarn is installed and run either `npm install` or `yarn install` at the root of this project.
