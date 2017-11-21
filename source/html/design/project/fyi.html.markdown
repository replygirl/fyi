---
title: "fyi"
colors:
  bg: "#fafafa"
  text: "#202020"
  brand: "#fe2851"
portfolio:
- name: "web"
  images:
    - "/img/projects/fyi/web/phone.gif"
    - "/img/projects/fyi/web/tablet.gif"
    - "/img/projects/fyi/web/desktop.gif"
- name: "music"
  images:
    - "/img/projects/fyi/music/moonstone.png"
    - "/img/projects/fyi/music/bloom.png"
---

***FYI*** is an effort to present myself to the world with some level of visual consistency. In other words, it's a *"personal brand" (🤢).*

FYI is also this website, which I use as an educational tool for myself. Building and rebuilding it lets me validate new ideas and improve as a front-end developer without the strategic concerns that typically come with putting things out into the world. The source is on [GitHub](https://github.com/imogennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn/fyi).

Changes as of October 2017:

### New brand elements
- A bright RGB color palette replaces blue + warm tones.
- [Karla](https://fonts.google.com/specimen/Karla), a new body font to complement [Space Mono](https://fonts.google.com/specimen/Space+Mono).
- Italicized page headers and hero text.

### Website version 3
- [Middleman](https://middlemanapp.com) for generation.
- [Surge](https://surge.sh) for hosting.
- **Statesman**, a thing I wrote, for navigation.
  - It's a state controller that doesn't keep track of state.
  - Configuration uses four optional variables, and the rest is HTML attributes. No scripting experience required.
  - Designed for use in future projects.
- Markdown as the markup language for project pages.
  - HTML is hidden away in a separate layout file.
  - **StatesmanMarkdown**, a [Redcarpet](https://github.com/vmg/redcarpet) extension I wrote, parses local links like {this}(page,music).
- Grids! After a few experiments with 2D scrolling, I've calmed down and made things move the direction you expect them to.
