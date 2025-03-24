# /dev/vibe

A simple HTML, CSS, and JavaScript website for showcasing tiny coding experiments with LLMs.
It's vibe coding with real life constraints
1. Act like a non coder: I don't modify the code, just interact with LLM's
2. 1h contraint, after 1h of tests and experiments I ship it

Feel free to copy this challenge and get a first hand and prolific experience about what LLM's can and can't do for non coders.

-------------------------------------------------------------------------------------------------------------------------------

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
