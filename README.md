# Ferry Ticket System ⛴️🎫

This project is a web application that mimics a ferry ticketing system. Users can sign up, log in, and manage their ferry tickets through a user-friendly interface. Tickets are designed to expire either after two uses or after 2 hours from the time of creation, adding a realistic touch to the ticketing experience. Even after expiration, tickets can be either deleted or kept for record-keeping.

### Features:
- **Login System**: Sign up and log in to manage your tickets.
- **Ticket Management**: Create ferry tickets with a set expiration criteria:
  - Expires after being used twice.
  - Expires 2 hours after creation.
- **Ticket Actions**: Delete expired tickets or keep them in your history.
  
### Tech Stack:
- **Front-end**: Built with SvelteKit, offering a fast and reactive user experience.
- **Back-end**: Powered by NestJS, providing a robust and scalable API.

### Setup:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server with `npm run dev` for SvelteKit and `npm run start` for NestJS.
4. Access the application on your local environment to start managing ferry tickets.

Don't forget to set up the `.env` file to configure your environment variables, as this is crucial for the proper functioning of the application. Also, keep in mind that this project uses Prisma as the ORM, so ensure your database configuration is correct in the `.env` file before running migrations or starting the application.
