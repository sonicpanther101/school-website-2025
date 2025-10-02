# school-website-2025

- [x] designs

- [x] Pages:

- [x] Home
- [x] Tramps - stats: difficulty, distance, and key features.
- [x] Tramping advise - gear
- [x] Privacy policy
- [x] Community
- [x] Navbar
- [x] Footer

- [ ] Responsive pages:

- [ ] Home
- [x] Tramps
- [x] Tramping advise
- [x] Privacy policy
- [x] Community
- [x] Navbar
- [x] Footer

- [ ] Features:
- [x] Form to sign up to group tramps
- [x] Dark mode
- [x] Comments [elfsight](https://elfsightcdn.com)

react framework - [NextJS](https://nextjs.org/docs/app/getting-started/installation)

hero page design - [https://prismic.io/blog/website-hero-section](https://prismic.io/blog/website-hero-section)

palette - [catppuccin](https://www.npmjs.com/package/@catppuccin/palette)

styling - [tailwind](https://tailwindcss.com/docs/)

## 1. Purpose of the Outcome:

The purpose of this project is to create a website for a tramping club that allows members to find and organize local group tramps, share track information, and engage with the tramping community. The website should be easy to use, visually appealing, and functional across multiple devices.

The Marlborough Tramps website was successfully created using Next.js with React components and Tailwind CSS styling. The website provides a modern, responsive platform for tramping club members to:
- Browse three featured hiking tracks (Nydia Track, Quail Stream Walk, Wairau Lagoons)
- Sign up for group tramps via an email modal form
- Access tramping advice and safety information
- Engage with the community through a comments section

![hero](image.png)

![Nydia Track](image-2.png)

## 2. Requirements of the End Users:

The primary users of the website are members of the tramping club, who are likely outdoor enthusiasts, hikers, and nature lovers. They need a platform that:

### Provides clear information on three hiking tracks, including difficulty, distance, and key features.

All three tracks (Nydia Bay, Quail Stream Walk, and Wairau Lagoons) are presented with:

- Difficulty ratings and distances in the descriptions
- Multiple high-quality images in carousel format
- Key features including walking time, grade, and terrain details
- Creative Commons image attribution in footers

![Nydia Track](image-2.png)

![Quail Stream Walk](image-1.png)

![Wairou Lagoons](image-3.png)

### Offers a pop-up (modal) form to sign up for group tramps.

Implemented in `components/toaster.tsx` using HeroUI's toast system:

- Email input validation
- "Join Now" buttons in navbar and homepage
- Modal appears with title "Stay Updated Join Our Mailing List!"
- Infinity timeout (stays open until user closes it)
- Responsive design (90vw on mobile, 70vw on desktop)

Desktop:

![Desktop Join Now](image-4.png)

Mobile:

![Mobile Join Now](image-5.png)

### Is accessible and usable on mobile devices, as many users may access the site while on the go.

Responsive design implemented throughout using:

- Tailwind's responsive classes (sm:, md:, lg: breakpoints)
- Flexible layouts with flexbox (`flex flex-col sm:flex-row`)
- Collapsible hamburger menu on mobile (NavbarMenuToggle)
- Touch-friendly button sizes
- Optimized image sizing for different screens

Mobile Navigation Menu:

![Mobile nav menu](image-6.png)

Mobile Homepage:

![Mobile homepage](image-7.png)

Tablet Advise Page:

![Tablet advise](image-8.png)

### Offers advice on tramping procedures

Dedicated `pages/Advice/index.tsx` page includes:

- Personal gear list
- Cooking and food equipment
- Multiple "Useful Tips" sections
- Alternating image and text layout
- All advice organized in clear, bulleted lists

Advice Page:

![Advice](image-9.png)

Useful Tips:

![useful tips](image-10.png)

### Creates three web pages, with combinations of images and text.

Created four pages:

- Home page (`pages/index.tsx`) - Landing page with hero section, about, FAQ, advice preview, and privacy policy
- Tramps page (`pages/Tramps/index.tsx`) - Detailed information on all three tracks with image carousels
- Advice page (`pages/Advice/index.tsx`) - Comprehensive tramping advice and equipment lists
- Community page (`pages/Community/index.tsx`) - Interactive comments section

Navbar showing all pages:

![navbar](image-11.png)

### Adds appropriate headings and subheads

Semantic HTML heading hierarchy used throughout:

- `<h1>` for main page titles (text-5xl to text-7xl)
- `<h2>` for section titles in cards (text-2xl to text-4xl)
- CardHeader components for consistent heading styling
- Appropriate font weights (font-bold, font-black)

Example of heading hierarchy:

![homepage title and subtitle code](image-12.png)

### Uses images, logo and provided by the stakeholder (see Tramping images folder)

All images other than walk specific ones provided by the stakeholder:

- Logo displayed in footer and cropped version in navbar
- 8 general images in rotation on homepage carousel

Footer:

![Footer](image-14.png)

Homepage carousel and navbar logo:

![Homepage and navbar](image-13.png)

### Uses the contact address details:

Contact information displayed in footer component (`components/footer.tsx`):

- Email: admin@marlboroughtramps.co.nz (with clickable mailto link)
- All phone numbers are clickable tel: links
- All external links include showAnchorIcon for accessibility

Footer:

![Footer](image-14.png)

Footer hover:

![Footer hover](image-15.png)
			
## 3. Website Creation Using Appropriate Tools, Techniques, and Conventions:

### Responsive Design: Ensure the website works seamlessly on multiple devices (e.g., desktops, tablets, smartphones). 

Implemented using Tailwind CSS breakpoints throughout all components:

- Mobile-first approach with base styles for mobile
- `sm:` (640px), `md:` (768px), `lg:` (1024px) breakpoints
- Flexible grid layouts: `flex flex-col sm:flex-row`
- Dynamic widths: `w-[90vw] sm:w-[70vw]`
- Responsive navigation with hamburger menu on mobile

Comparison between mobile and desktop:

![Mobile vs Desktop](image-16.png)

Mobile Navigation Menu:

![Mobile nav menu](image-6.png)

Responsive Card Layout:

![Comparison of mobile and desktop card layout advice page](image-17.png)

### Interactivity: Implement interactive features such as:

#### A collapsible navigation menu for easy access on smaller screens.

Implemented in `components/navbar.tsx`:

- NavbarMenuToggle for mobile devices
- Appears only on screens < 768px (md:hidden)
- Smooth transitions between open/closed states
- Contains all navigation items plus "Join Now" button

Closed vs Open Navigation Menu Hamburger on mobile (Interpolates between states):

![closed vs open menu](image-18.png)

Mobile Navigation Menu:

![Mobile nav menu](image-6.png)

#### Buttons that change appearance on hover or click to provide visual feedback.

Multiple interactive button states:

- Hover states provided by HeroUI theme

Normal button state:

![normal button](image-19.png)

Hover button state (slightly darker):

![hover button](image-20.png)

Clicked button state (Lighter circle propogates from cursor):

![Clicked button](image-21.png)

#### An image slideshow to display photos from past walks.

Two carousel implementations in `components/carousel.tsx`:

- EmblaCarousel - For individual tramp pages with single card
- TextEmblaCarousel - For homepage with multiple cards (This was removed due to a suggestion to simplify the home page by my dad)

Features:

- Autoplay with configurable delay (2500-10000ms)
- Loop enabled for continuous playback
- Navigation arrows (PrevButton/NextButton) on desktop
- Touch/swipe support on mobile
- Smooth transitions with custom duration

Desktop Carousel:

![Desktop carousel for Nydia Track](image-2.png)

Mobile Carousel:

![Mobile carousel for Nydia Track](image-22.png)

Carousel in action:

![Carousel in action](image-23.png)

### Industry guidelines (conventions) including semantic HTML: Structure your HTML using semantic elements to improve accessibility, SEO, and maintainability.

All pages use proper semantic structure:

- `<main>` for primary content
- `<nav>` within HeroUINavbar component
- `<footer>` in Footer component
- Semantic list elements (`<ul>`, `<li>`)
- Proper heading hierarchy (`<h1>`, `<h2>`)
- Card components with CardHeader, CardBody, CardFooter
- Links with proper attributes (isExternal, showAnchorIcon)

Code structure:
![default layout](image-24.png)

### Apply relevant website conventions (eg semantic HTML and design principles) and apply these to improve the quality of the website.

#### Catppuccin Color Scheme

Custom theme in `tailwind.config.js`:

- Light mode: Catppuccin Latte palette
- Dark mode: Catppuccin Mocha palette
- Consistent color tokens:
- Primary: green
- Secondary: red
- Background: base
- Foreground: text
- Surface levels: surface0, surface1, surface2
- Overlays for dividers and borders

Dark Mode:

![dark mode](image-25.png)

Light Mode:

![light mode](image-26.png)

Light/Dark Mode Toggle:

![dark mode toggle](image-27.png)

![light mode toggle](image-28.png)

#### Consistent Spacing

- Card padding: `p-[10px]`
- Gap spacing: `gap-3`, `gap-6`
- Margins: `m-6`, `mt-7`, `mb-12`
- Responsive adjustments: `mx-6 sm:mx-10`

Demonstrating Consistent Spacing:

![comparing gaps](image-29.png)

#### Visual Hierarchy

- Large hero text: `text-5xl md:text-7xl`
- Section headers: `text-2xl` to `text-6xl`
- Bold weights for emphasis: `font-bold`, `font-black`
- Rounded corners: `rounded-2xl`, `rounded-3xl`
- Shadow depth: `shadow-lg`, `shadow-2xl`

Demonstrating Visual Hierarchy in Homepage:

![hero](image.png)

### Apply appropriate data integrity and testing procedures. Use these to continually improve the quality and functionality of the website throughout the design, development and testing procedures.

#### Form Validation

Email input in modal (`components/toaster.tsx`):

- Input type="email" for browser-level validation
- Captures value with onChange handler
- Stored in component state
- Console logging for demonstration that the value is captured

Invalid Email:

![invalid email](image-30.png)

Valid Email:

![valid email](image-31.png)

Terminal output:

![terminal](image-32.png)

#### Responsive Testing

Website tested across multiple devices:

- Desktop breakpoints: 1024px+ (lg)
- Tablet breakpoints: 768px+ (md)
- Mobile breakpoints: 640px+ (sm)
- Base mobile-first design: <640px

Responsive Testing with chrome dev tools:

![responsive](image-33.png)

#### Accessibility Testing

- Alt text on all images (not required for background images)
- Semantic HTML structure
- Color contrast (Catppuccin palette has good contrast)
- External link icons (showAnchorIcon)

### Apply user experience principles relevant to the purpose of the website. Use these to iteratively improve the quality of the website

#### Accessibility

- Semantic HTML throughout
- Alt text on all images (imageAlts arrays)
- Focus indicator styling (focus color in theme)
- External link indicators (showAnchorIcon)
- Phone and email links are clickable (tel:, mailto:)
- Responsive text sizing (text-xl, text-2xl, etc.)

## 4. Addressing Relevant Implications (at least three):
Ensure that the website addresses the relevant implications:
### Social and Cultural
### Legal & Intellectual Property
### Privacy/Confidentiality
### Accessibility & Usability & Aesthetics
### Functionality - works
### Sustainability and Future-Proofing - using easy framework
### End-User Considerations

## 5. Applying User Experience (UX) Principles (at least two):
##t# Accessibility
### Focus on the Target User: 
### Consistency
### Simpliciy
### Font Styling (Typography)
### Usability Testing
### Providing Feedback

## 6. Applying Data Integrity and Testing Procedures (at least three):
### Data Integrity: Validate form inputs (e.g., user sign-ups) to ensure correct and reliable data.
### Testing:
#### Test the website’s responsiveness on different devices and screen sizes.
#### Ensure all interactive elements work as intended.
#### Check for accessibility issues, such as missing alt text or insufficient contrast.
#### Use tools like the W3C Validator to validate HTML and CSS. Correct any errors.
#### Conduct usability testing with the stakeholder and actual users, gathering feedback to improve the site’s functionality and user experience.


## Merit Level:
### Apply UX Principles for Quality Improvement:
#### Use feedback from usability tests to iteratively enhance the website.
#### Experiment with different design elements (e.g., colour schemes, typography) to find the most effective combinations.
#### Incorporate Google Fonts for better typography and use normalize.css for consistent styling across browsers.
#### Apply design techniques like partial transparency, link state styling, and CSS Grid for a polished, professional look.

## Excellence Level:
### Continual Improvement:
#### Begin by designing the homepage and seek feedback from end-users on both its appearance and functionality.
#### Implement suggested changes, then expand the website by adding more pages and features.
#### Regularly test and refine the website throughout the development process, keeping detailed records of all improvements made based on testing results.

### Efficient Tools and Techniques:
#### Use wireframes and concept sketches to plan the website’s design.
#### Take advantage of shortcuts and tools like Visual Studio Code and Google Chrome DevTools for efficient coding and debugging.
#### Optimize images using tools like https://tinypng.com/ to ensure fast loading times.
#### Apply mobile-first design principles, ensuring the website is fully functional on mobile devices before scaling up to larger screens.
#### Comment your code clearly to make it easier to understand and maintain.
#### Use descriptive class and ID names
#### Validate HTML and CSS code


## Evidence to be submitted:
### 1. Submit the completed website in zip format, containing HTML, CSS and media files
### 2. A written description of how you addressed the relevant implications
### 3. Records of how you completed data integrity and testing procedures when developing the website. This could include:
#### a testing table
#### annotated screenshots (eg showing the version of a webpage you tested and the changes made as a consequence of testing)
#### a video of no more than 3 minutes showing how you conducted the testing
#### stakeholder feedback records
#### screenshots of completed validation procedures etc