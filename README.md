# WebGuard : Dark Patterns Detector

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![GitHub Forks](https://img.shields.io/github/forks/zubairmh/dpbh-web?style=social)
![GitHub Stars](https://img.shields.io/github/stars/zubairmh/dpbh-web?style=social)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/zubairmh/dpbh-web?style=social)

![Guard](https://github.com/zubairmh/dpbh-web/assets/113838495/b591ea7a-e2b6-4cf3-a692-d814c3778d93)

## Overview

The _Dark Patterns Detector_ is a sophisticated web extension developed with _Next.js_, designed to systematically identify and analyze deceptive design elements, commonly known as "dark patterns," prevalent on various websites. These manipulative tactics exploit user behavior, and this extension aims to empower users by exposing and providing insights into such practices.


## Screenshots



| ![Home](https://github.com/rachancheet/DPBH/assets/55895940/f3d6cc15-f315-4fa4-95eb-8e5489a13d97) | ![Analysis](https://github.com/rachancheet/DPBH/assets/55895940/9384435f-500c-4747-bbb8-96ceff325193) | ![About](https://github.com/rachancheet/DPBH/assets/55895940/20d6e2bb-87ef-44f4-bb33-d944a71b98ef) |
| :-------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |


## Features

- **Pattern Detection:** Utilizing _ML model and image processing_ , the extension discerns and categorizes common dark patterns, including urgency, misdirection, scarcity, obstruction, social proof, sneaking, and forced action on websites.

- **Pattern Counts:** Providing a transparent count of each detected dark pattern on a given webpage, the extension offers users valuable insights into the specific tactics employed.

- **Interactive Visualization:** Results of the analysis are presented through an intuitive and interactive pie chart, enhanced by the [Recharts](https://recharts.org/) library. This visualization aids users in easily interpreting the distribution of dark patterns.

### Process Flow Diagram

![ProcessFlowFull drawio](https://github.com/zubairmh/dpbh-web/assets/113838495/3c09c4b6-d221-4dc8-8915-5519ee67fcf3)



## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rachancheet/DPBH
   ```

2. Navigate to the project directory:

   ```bash
   cd DPBH
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the extension during development.

## Browser Compatibility

| Browser                                                                                                                                                                                        | Is compatible? | Links                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------: | ---------------------------------------------------------------------------------- |
| <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/chrome.svg" width="24px" style="background: white" /> Google Chrome                                         |       ✅       | https://chromewebstore.google.com/detail/webguard/fmdhbnclekigiecacodhabbbnadokeoj |
| <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/firefox.svg" width="24px" style="background: white" /> Mozilla Firefox                                      |       ✅       | https://addons.mozilla.org/en-US/firefox/addon/webguard-gg/                        |
| <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/edge.svg" width="24px" style="background: white" /> Microsoft Edge                                          |       ✅       | Download From Chrome Webstore                                                      |
| <img src="https://gist.githubusercontent.com/PonomareVlad/f7a37bce6ff2dc19971c681269a30b26/raw/6ead3403e203db1c9ea195b57f6026f1d498e7dc/arc.svg" width="24px" style="background: white" /> Arc |       ✅       | Download From Chrome Webstore                                                      |
| <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/opera.svg" width="24px" style="background: white" /> Opera                                                  |       ✅       | Download From Chrome Webstore                                                      |


### Usage

- **Automatic Detection:** The extension seamlessly scans webpages, automatically identifying and categorizing dark patterns.

- **Comprehensive Analysis:** Detailed data analysis provides users with actionable insights into the prevalence of each dark pattern.

- **Visual Representation:** An interactive pie chart visually represents the distribution of dark patterns, enhanced using the [Recharts](https://recharts.org/) library.


## License

This project is licensed under the _MIT License_ - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to [Recharts](https://recharts.org/) for providing an excellent tool for pie chart visualization.
- Special thanks to [Framer-motion](https://www.framer.com/motion/) for providing the excellent animations and transition
