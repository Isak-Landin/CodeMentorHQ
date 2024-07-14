# CodeMentorHQ Open edX Platform

Welcome to the CodeMentorHQ Open edX platform! This repository contains the configuration and customizations for deploying and managing an Open edX instance tailored for coding courses and mentor interactions.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About
CodeMentorHQ is an online learning platform for coding enthusiasts. Our platform offers comprehensive coding courses, interactive tests, examinations, and mentorship opportunities. 

## Features
- **Video Courses**: Comprehensive video tutorials on various coding languages and frameworks.
- **Interactive Tests**: Quizzes and assignments to reinforce learning.
- **Examinations**: Final exams to certify course completion.
- **Mentorship**: Rent a code mentor for personalized guidance.

## Installation
To set up the Open edX platform locally or on a server, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/codementorhq-edx.git
    cd codementorhq-edx
    ```

2. **Install dependencies**:
    ```bash
    sudo apt-get update
    sudo apt-get install -y python3-pip
    pip install tutor[full]
    ```

3. **Configure Tutor**:
    ```bash
    tutor local quickstart
    ```

4. **Launch the platform**:
    ```bash
    tutor local launch
    ```

## Configuration
Customize the platform by editing the `config.yml` file located in the `$(tutor config printroot)/env` directory. Ensure to update:
- LMS and CMS domain names
- Email configurations for SMTP
- Enable SSL/TLS for secure connections

## Usage
- Access the LMS: `https://codementorhq.com`
- Access the CMS: `https://studio.codementorhq.com`

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License
This project is licensed under the AGPLv3 License - see the [LICENSE](LICENSE) file for details.

## Contact
For support, please contact us at [support@codementorhq.com](mailto:support@codementorhq.com).

---

Happy Coding!
