# Next.js 14 Online Store with Tailwind CSS, Strapi, Stripe, and Clerk

This is a full-stack online store built using Next.js 14, Tailwind CSS for styling, Strapi for headless CMS, Stripe for payment processing, and Clerk for authentication and user management.

### Home Page

## Features

- Seamless registration, login, and authentication using Clerk
- Intuitive course selection and effortless addition to the shopping cart
- Automatic calculation of the total order amount
- Secure payment processing through Stripe integration
- Hassle-free email notifications and order management using Resend tool

## Get Started

2. Install dependencies: `npm install` or `yarn install`

3. Set up environment variables:

```bash {"id":"01J1V3ZBPTMM5Z43MYG5Z7B2DR"}
NEXT_PUBLIC_REST_API_KEY='your_rest_api_key'
NEXT_PUBLIC_REST_API_URL='http://localhost:1337/api'
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='your_clerk_publishable_key'
CLERK_SECRET_KEY='your_clerk_secret_key'
NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL='/'
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL='/'
NEXT_PUBLIC_STRIPE_PUBLISHER_KEY='your_stripe_publisher_key'
NEXT_PUBLIC_STRIPE_SECRET_KEY='your_stripe_secret_key'

```

4. Start the development server: `npm run dev` or `yarn dev`

**Keywords:** Next.js, Tailwind CSS, Strapi, Stripe, Clerk, Online Store, E-commerce, Full Stack, Open Source.

**Enjoy building awesome projects with our Next.js 14 Online Store!**
