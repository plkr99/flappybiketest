<p align="center">
  <h3 align="center">FlappyBike</h3>

  <p align="center">
    <a href="https://www.figma.com/file/bn7sykSde8Zv6cuStu3KAm/flappybike-docs?type=whiteboard&node-id=0%3A1&t=6K5U9jDFY4oT9QYJ-1"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://flappybike.vercel.app/en">View Demo</a>
  </p>
</p>

### Built With

* [Nextjs](https://nextjs.org/)
* [Tailwindcss](https://tailwindcss.com/)


## Getting Started

- First, you need to install  [Node.js](https://nodejs.org/en)
- Past the Graphhopper API_KEY into this file app/[lang]/home/components/body.jsx

```
fetch(
  "https://graphhopper.com/api/1/route?key=API_KEY",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      points: [startEndPoints, getCoordinate(position)],
      snap_preventions: ["motorway", "ferry", "tunnel"],
      details: ["road_class", "surface"],
      profile: "bike",
      locale: "en",
      instructions: true,
      calc_points: true,
      points_encoded: false,
    }),
  }
)
```

- then run this command to install packages

```bash
npm install
```

if you want to run the development server:

```bash
npm run dev
```

if you want to run the production:

```bash
npm run build
npm run start
```

## dictionarie

You find the dictionaries in <b>lib forlder</b>, you can add and update any text from there

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
