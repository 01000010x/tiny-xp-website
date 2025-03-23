# Tiny Experiments

A simple HTML, CSS, and JavaScript website for showcasing coding experiments with LLMs.

## Project Structure

```
TinyExperiments/
├── css/
│   └── styles.css          # Main stylesheet
├── data/
│   └── experiments.json    # JSON data file containing all experiments
├── images/
│   └── [image files]       # Images for experiments
├── js/
│   └── main.js             # JavaScript for loading and displaying experiments
├── index.html              # Main HTML file
└── README.md               # This file
```

## How to Add New Experiments

To add a new experiment to your collection, simply edit the `data/experiments.json` file and add a new entry to the `experiments` array:

```json
{
  "id": "unique-id",
  "title": "Your Experiment Title",
  "description": "A brief description of your experiment",
  "image": "images/your-image.jpg",
  "demoUrl": "URL to your demo",
  "codeUrl": "URL to your code (optional)",
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```

### Fields Explanation:

- `id`: A unique identifier for the experiment
- `title`: The name of your experiment
- `description`: A brief description (1-2 sentences recommended)
- `image`: Path to the image thumbnail (place images in the `images/` directory)
- `demoUrl`: URL to view the live demo
- `codeUrl`: URL to view the source code (optional)
- `tags`: Array of tags to categorize your experiment

## Hosting Options

This site can be hosted for free on:

1. **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
2. **Netlify**: Connect to your GitHub repository for automatic deployment
3. **Vercel**: Similar to Netlify with a generous free tier
4. **Cloudflare Pages**: Free with unlimited bandwidth

## Local Development

To test the site locally, you have several options:

### Option 1: Open directly in browser
Simply open the `index.html` file in your browser. Note that some browsers may block loading the JSON file for security reasons.

### Option 2: Use a simple HTTP server
If you have Python installed:
```
python -m http.server
# or
python3 -m http.server
```

### Option 3: Use your existing development setup
If you already have a development server you're comfortable with (like from other projects), you can use that to serve this directory.

### Option 4: Browser extensions
Many browsers have extensions that can serve local files, like "Web Server for Chrome".
# tiny-xp-website
