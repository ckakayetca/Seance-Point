# SeancePoint

SeancePoint is a Single component Application made with Angular for the 2023 Angular exam in SoftUni

# Idea

The idea of the project is to implement an e-commerce application where users are able to:

- publish seance offers (psychiatry or psychology appointments, taro reading, astrology, maths lessons, etc), thereafter edit or delete it.

- make an appointment for someone else's seance, thereafter cancel it if needed.

- leave a review (required rating and optional comment), thereafter edit or delete it

- view their private profile component, where they will be able to edit the information in their profile or view their own seances and appointments

# Architecture

The application consists of 4 modules:

- CORE module, containing the navigation component, error handling and authentication guards

- SHARED module, containing the directives, pipes and loader component for this application + utility files (empty-types.ts contains empty objects of my specified types to avoid using the undefined or null types)

- AUTHENTICATION module, containing:
    - login component
    - register component
    - profile component
    - edit profile component
    - my appointments component
    - my seances component
    - authentication service (which uses a behavior subject to manage the user state of the application + communicates with the Rest-API for the user info)
    - authentication component (which uses the authentication service to manage the user state)

- SEANCE module, containing:
    - seances component
    - new seance component
    - seance-details component (this is the page for a specific seance)
    - review component (to keep the seance-details component modular)
    - seance-edit component (to edit your own seance)

- APP module (root), containing:
    - all of the above
    - home component (static)
    - 404 component (static)
    - API service, which manages the communication with the REST-API
    - AUTH interceptor, which intercepts every request to the API and attaches the user info

# User Interface

I want to apologise for the rough User Interface of the application. Although simple and without much content, I suppose it is very intuitive and would provide a good user experience.

# Running the project

Please do not forget to run the "npm i" command before running the project.

This project uses Moment.js and Angular Material.