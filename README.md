# 📁 Collection Wishlist

> A digital wishlist and memory collection website inspired by GUI file organization — where wishes are stored like folders and memories float as scattered thoughts.

## 🌟 Highlights

- GUI-inspired design mimicking file folders and finder/file explorer
- Wishlist organization with priority filters (high, medium, low)
- Gallery view with image grid layout
- Fluid, scattered memory visualization — like how the brain organizes but stays imaginative
- Built with Eleventy (11ty) static site generator
- Filter system to categorize wishes by priority

## 📖 Overview

I was inspired by the design and history of GUI, which documentary videos always portray with collections of files in the shape of folders. Over the past, the development of file organizing in GUI has moved to a simpler look that we usually find in Finder/File Explorer or other applications in different operating systems.

On the other hand, I recently accomplished some of my wishlist in the last couple of months. I believe going to college in New York helped me in achieving those wishlist. Especially I'm a collector of memories and experiences as I'm a curious person. My expense usually goes to new experiences. I have a list of wishlist in my own, journal, and even book collecting pieces of item I took in different trip or experience (similar to junk books). And I love photography or just taking pictures to put it in my archives. As life passes by with all its busy schedule, I can always find time to enjoy life, achieving wishlist and collecting memory on the way.

Thinking about how each memory is stored in my head is similar to how file organizer works — this collection website was created. While each wishlist is stored like in folders, each wishlist is still a floating scattered memory in their own page. I was inspired by how our brain is capable of organizing but also fluid imagination at the same time. It's also capable to attach different context to each memory, and I portray it with filters to categorize different priorities to each wishlist.

## 👤 Author

Created by Feliciatiffany as a personal project to track wishes and collect memories.

## 🚀 Usage

The site runs as a static website. To view:

1. Install dependencies: `npm install`
2. Run development server: `npm start`
3. Build for production: `npm run build`

Or deploy to GitHub Pages or any static hosting service.

## ⬇️ Installation

Built with [Eleventy](https://www.11ty.dev/) (11ty) — a static site generator.

Requirements:
- Node.js
- npm

```bash
npm install
npm start
```

## 🎨 Design Decisions

### Overall Design
The design is based on inspiration from GUI or graphical user interface — think folders, file explorers, and the familiar layout of operating systems. Each wishlist is stored like a folder, but the memories float freely on their own pages, reflecting how the brain can organize while also maintaining fluid imagination.

### Home Page
- Simple and minimal, showing a sneak peek of the theme
- Introduces the folder-based concept

### Wishlist Page
- User interface of Finder: file organizing aesthetic
- Each collection displayed as files/folders
- **Challenge**: Displaying each collection while excluding index, wishlist.html, etc.
- **Filter System**: The most challenging part — learning how to implement filtering where clicking a button filters items based on priority. Used tags to categorize (high, medium, low priority).

### Gallery Page
- Image grid layout as learned in class
- Multiple images displayed in an organized grid

### Collection Pages
- Visualizes how the brain is capable of organizing but also fluid at the same time
- Full of scattered memories — each wishlist has its own space but connects to the larger system

## 🔧 How the Code Works

### For Non-Technical Understanding:

1. **Data Structure (images.json)**: The site uses a data file to store all wishlist items. Each item has details like title, image, priority level, and other metadata.

2. **Templates (Eleventy)**: The site uses templates to generate different pages from the same design. This makes it easy to add new wishes without writing new HTML for each one.

3. **Filters**: The priority filters (high, medium, low) work by checking each item's priority tag and only showing items that match the selected filter.

4. **Layouts**: The design uses a consistent folder-inspired layout that changes slightly depending on which page you're viewing.

### For Technical Team:

- **11ty**: Static site generator for efficient, fast-loading pages
- **Nunjucks templates**: Used for reusable components and layouts
- **JSON data**: Centralized data management for wishlist items
- **CSS variables**: For consistent theming across pages
- **Filter logic**: Implemented using 11ty collection filters and conditional rendering

## 📁 Project Structure

```
├── _data/
│   └── images.json         # Wishlist data
├── _includes/              # Template components
├── aurora.md               # Wishlist item
├── canada.md               # Wishlist item
├── galleries.md            # Gallery page data
├── index.md                # Home page
├── master.md               # Master wishlist
├── nagoya.md               # Wishlist item
├── nintendo.md            # Wishlist item
├── papua.md                # Wishlist item
├── priorityhigh.md         # High priority filter
├── prioritylow.md         # Low priority filter
├── prioritymedium.md      # Medium priority filter
├── snowboard.md           # Wishlist item
├── wishlist.md             # Main wishlist page
├── styles/                 # CSS files
├── scripts/                # JavaScript files
└── images/                 # Image assets
```

## 💬 Feedback

For questions or suggestions, please open an issue on the project repository.