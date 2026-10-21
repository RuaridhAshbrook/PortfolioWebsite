# Portfolio site

A React (Vite) site with a Home page (featured project carousel + intro), About Me, Projects (switchable) and Contact (details + email form). There is no server to run: `npm run build` produces static files you can host on AWS (S3 + CloudFront, Amplify Hosting, or a plain web server on EC2).

## Run it locally

```bash
cd client
npm install
npm run dev
```

Then open http://localhost:5173.

## Put in your own details

Everything you will want to change is in **`client/src/data/content.js`**: your name, intro, About Me text and photos, projects, the featured project, and your contact details.

- Put images in `client/public/images/` and refer to them as `'/images/my-photo.jpg'`.
- The logo in the top-left of the navbar is `client/public/logo.svg`. Replace it with your own image (if you use a different file name, update `Navbar.jsx`).

## Build for AWS

```bash
cd client
npm run build
```

This creates `client/dist/`. Upload the **contents** of `dist` to your host.

Because the site uses real URLs (`/about`, `/projects`, `/contact`), the host must serve `index.html` for any path that is not a file, otherwise refreshing on `/about` gives a 404:

- **S3 + CloudFront:** add custom error responses for 403 and 404 that return `/index.html` with status 200.
- **Amplify Hosting:** add a rewrite rule, source `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>`, target `/index.html`, type `200 (Rewrite)`.
- **nginx on EC2:** `location / { try_files $uri /index.html; }`

## The contact form

The form sends a JSON POST (`name`, `email`, `message`) to the URL in the `VITE_CONTACT_ENDPOINT` build variable. A static site cannot send email by itself, so you need something on AWS to receive it.

`contact-handler/index.mjs` is a small ready-made AWS Lambda function that does this with Amazon SES. It is optional: use it, or point the form at any endpoint of your own that accepts the same JSON.

To use it:

1. In SES, verify the address you want to receive mail at (and the sender address). New SES accounts start in sandbox mode, so request production access if you want to email unverified addresses.
2. Create a Lambda (Node.js 20+), paste in `index.mjs`, and set the environment variables `TO_EMAIL`, `FROM_EMAIL` and `ALLOW_ORIGIN` (your site's address). Give its role permission for `ses:SendEmail`.
3. Add a Function URL (or API Gateway route) for it.
4. Create `client/.env.production` containing:

   ```
   VITE_CONTACT_ENDPOINT=https://your-function-url.lambda-url.eu-west-2.on.aws/
   ```

5. Run `npm run build` again and re-upload `dist`.

The form includes a hidden spam-trap field, and the handler ignores submissions that fill it in.
