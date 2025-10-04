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

- [x] Responsive pages:

  - [x] Home
  - [x] Tramps
  - [x] Tramping advise
  - [x] Privacy policy
  - [x] Community
  - [x] Navbar
  - [x] Footer

- [x] Features:

  - [x] Form to sign up to group tramps
  - [x] Dark mode
  - [x] Comments [elfsight](https://elfsightcdn.com)

react framework - [NextJS](https://nextjs.org/docs/app/getting-started/installation)

hero page design - [https://prismic.io/blog/website-hero-section](https://prismic.io/blog/website-hero-section)

palette - [catppuccin](https://www.npmjs.com/package/@catppuccin/palette)

styling - [tailwind](https://tailwindcss.com/docs/)

Some screenshots include the nextjs logo due to them being taken in dev mode, sometimes with some errors, these errors will be fixed in the final version.

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

Alt text on images:

![alt text](image-52.png)

### Apply user experience principles relevant to the purpose of the website. Use these to iteratively improve the quality of the website

#### Accessibility

- Semantic HTML throughout
- Alt text on all images (imageAlts arrays)
- Focus indicator styling (focus color in theme)
- External link indicators (showAnchorIcon)
- Phone and email links are clickable (tel:, mailto:)
- Responsive text sizing (text-xl, text-2xl, etc.)

Lighthouse, a web performance tool provided by Google, benchmark results (Performance is only low due to Picton wifi):

![Lighthouse](image-34.png)

Focus and External Link Indicator:

![focus](image-35.png)

#### Target User Focus

Designed for outdoor enthusiasts and trampers:

- Nature-themed imagery throughout
- Clear hiking information (difficulty, distance, time)
- Practical advice sections
- Community features for group organization
- Mobile-friendly (users access on-the-go)
- Quick access to "Join Now" from multiple locations

Community comments page:

![community page](image-36.png)

Track information:

![Track information for Nydia Track](image-2.png)

Join Button location:

![Mobile nav menu](image-6.png)

#### Consistency

Consistent design elements throughout:

- Card-based layout system
- Uniform button styling (primary color, consistent sizing)
- Repeated carousel pattern for image galleries
- Consistent footer across all pages
- Same navigation on every page
- Catppuccin color scheme throughout

Consistent Design Elements:

![comparing two pages design](image-37.png)

Footer on different pages:

![footer on different pages](image-38.png)

#### Simplicity

Clean, uncluttered design:

- Clear navigation with 4 main items
- Simple card layouts
- Minimal text with clear sections
- White space for breathing room
- Single primary action (Join Now)
- FAQ section for common questions

Clean, Uncluttered Design with simple navigation:

![hero](image.png)

Lots of white space for breathing room:

![advice page](image-39.png)

#### Typography

Font system from theme configuration:

- Sans-serif font family (`var(--font-sans)`)
- Clear font size hierarchy (`text-xs` to `text-7xl`)
- Bold weights for emphasis (`font-bold`, `font-black`)
- Line height and spacing optimized
- Readable on all screen sizes

Font size and weight hierarchy, line height and spacing optimized:

![font hierarchy](image-40.png)

Readable on mobile:

![mobile](image-41.png)

#### Providing Feedback

User feedback mechanisms:

- Toast notifications for modal interactions
- Hover effects on buttons and links
- Active states on navigation items (text-primary when on page)
- Disabled states on carousel buttons (prevBtnDisabled, nextBtnDisabled)
- Visual feedback on form submission (Form closes if email is valid, error message if not)

Active states on navigation items:

![active states](image-42.png)

## 4. Addressing Relevant Implications (at least three):

Ensure that the website addresses the relevant implications:

### Legal & Intellectual Property

- All images not provided by the stakeholder are attributed with Creative Commons licensing
- Sources clearly stated in card footers:
  - "Image Source (Creative Commons): Department of Conservation"
  - "Image Source (Creative Commons): [Photographer name]"
- No copyrighted material used without permission

Creative Commons attribution:

![creative commons credits](image-43.png)

### Privacy/Confidentiality

Dedicated Privacy Policy section on homepage:

- Clear statement: "We value your privacy"
- Information Collection explained
- Information Use outlined
- Information Sharing policy (no third-party sales)
- Information Security measures described
- Accessible via footer link
- Modal only collects email (minimal data)

Privacy Policy:

![privacy policy](image-45.png)

Footer with link to privacy policy:

![Footer with link to privacy policy](image-44.png)

### Accessibility & Usability

- Semantic HTML structure throughout
- Alt text on all images
- Keyboard navigation support
- Focus states visible
- Color contrast meets standards (Catppuccin palette)
- Mobile-responsive design
- Touch targets appropriately sized (buttons size="lg")
- Clear visual hierarchy
- External links clearly marked

Lighthouse accessibility benchmark results:

![Lighthouse](image-34.png)

Appropriatly sized mobile buttons:

![Mobile Join Now button](image-5.png)

### Aesthetics

- Modern, clean design using Catppuccin theme
- Consistent color scheme (light and dark modes)
- Professional card-based layout
- High-quality nature photography
- Rounded corners and shadows for depth
- Proper spacing and white space
- Typography hierarchy
- Smooth transitions and animations

Consistent color scheme:

![Wairou Lagoons, demonstrating consistent color scheme](image-3.png)

Bottom edge of a card, with rounded corners, shadow, and white space:

![bottom edge of a card](image-46.png)

### Functionality

All core features working:

- [x] Navigation between pages
- [x] Email signup modal
- [x] Image carousels with autoplay
- [x] Responsive layouts
- [x] Theme switching (light/dark)
- [x] External links functioning
- [x] Community comments widget
- [x] Contact links (tel:, mailto:)

Modal appearing:

![modal appearing](image-47.png)

Carousel with autoplay:

![carousel changing](image-48.png)

### Sustainability and Future-Proofing

Using modern, maintainable frameworks:

- [Next.js](https://nextjs.org) - Industry-standard React framework
- [React](https://react.dev) - Component-based, reusable code
- [Tailwind CSS](https://tailwindcss.com) - Utility-first, maintainable styling
- [HeroUI](https://www.heroui.com) - Professional component library
- [TypeScript](https://www.typescriptlang.org) - Type safety (implied from .tsx extensions)
- [Embla Carousel](https://www.embla-carousel.com) - well-maintained library
- [GitHub](https://github.com) for version control and hosting
- Clear component structure in `/components` folder
- Separation of concerns (layouts, pages, components)

Project File Structure:

![file structure](image-49.png)

Dependencies in `package.json`:

![dependencies](image-50.png)

### End-User Considerations

Features prioritizing end-users:

- Mobile-first design (users access on-the-go)
- Quick "Join Now" access from multiple locations
- Clear, concise track information
- Practical tramping advice readily available
- Community features for member engagement
- FAQ section for common questions
- Multiple contact methods (email, phone)
- Fast loading with optimized images and lazy loading

Mobile Experience:

![Mobile homepage](image-7.png)

FAQ section:

![FAQ](image-51.png)

## 5. Applying User Experience (UX) Principles (at least two):

### [Accessibility](#accessibility)

### [Focus on the Target User](#target-user-focus)

### [Consistency](#consistency)

### [Simplicity](#simplicity)

### [Font Styling (Typography)](#typography)

### [Providing Feedback](#providing-feedback)

## 6. Applying Data Integrity and Testing Procedures (at least three):

### [Data Integrity: Validate form inputs (e.g., user sign-ups) to ensure correct and reliable data.](#form-validation)

### Testing:

#### [Test the website’s responsiveness on different devices and screen sizes.](#responsive-testing)

#### [Ensure all interactive elements work as intended.](#Functionality)

#### [Check for accessibility issues, such as missing alt text or insufficient contrast.](#accessibility-testing)

#### [Use tools like the W3C Validator to validate HTML and CSS. Correct any errors.](#validate-html-and-css-code)

#### [Conduct usability testing with the stakeholder and actual users, gathering feedback to improve the site’s functionality and user experience.](#use-feedback-from-usability-tests-to-iteratively-enhance-the-website)

## Merit Level:

### Apply UX Principles for Quality Improvement:

#### Use feedback from usability tests to iteratively enhance the website.

Evidence of refinement:

- Multiple carousel implementations (EmblaCarousel vs TextEmblaCarousel)
- Responsive adjustments at multiple breakpoints, because my sister said the site looked bad on her iPad, a screen ratio I wasn't taking into account.
- Card layouts optimized for different screen sizes
- Modal positioning adjusted (mb-[20vh] for visibility)
- Image overflow handling (overflow-hidden), because my dad said there was some image overflow when viewing the website on his phone
- Different timing on all carousels, because my mum said the images were charging too quickly

TextEmblaCarousel (Card moves with the image) vs EmblaCarousel (Card stays still):

![embla vs text](image-53.png)

Before and after adjustments of spacing:

![bad vs good spacing](image-54.png)

#### Experiment with different design elements (e.g., colour schemes, typography) to find the most effective combinations.

##### Colour Scheme Evolution

Initial design used a generic color palette with basic blues and grays. After feedback (Sadly not from the stakeholder) and testing:

- Original scheme: Standard blue (#0066cc) ![blue](image-61.png) with neutral grays
- Final scheme: Catppuccin palette with nature-inspired greens
  - Primary green aligns with outdoor/nature theme
  - Improved contrast ratios for accessibility
  - Cohesive light and dark mode variants
  - Warmer, more inviting atmosphere for tramping community

The Catppuccin palette was chosen specifically because:
- The green primary color evokes nature and outdoor activities
- The palette provides excellent contrast in both light and dark modes
- Consistent color tokens (base, surface, overlay) create visual harmony
- Professional appearance while remaining approachable

Old vs new colour scheme:

![changing colour scheme](image-55.png)

##### Typography Experimentation

Multiple font combinations were tested:

- Initial approach: Generic system fonts with inconsistent sizing
- Refined approach: Custom font stack with clear hierarchy
  - Implemented consistent scale: text-xs through text-7xl
  - Bold weights (font-bold, font-black) for emphasis
  - Optimized line heights for readability
  - Sans-serif for clean, modern look suitable for outdoor website

Font size adjustments based on testing:

- Hero text increased from text-4xl to text-7xl on desktop for impact
- Card titles standardized at text-2xl for consistency
- Body text set at text-base to text-xl for optimal readability across devices

Subtle differences in font and font styles before and after adjustments:

![before and after](image-62.png)

#### Incorporate Google Fonts for better typography and use normalize.css for consistent styling across browsers.

##### Google Fonts Implementation

The application uses Google Fonts loaded via Next.js's optimized font system:

- Roboto (sans-serif): Loaded with weights 300, 400, 500, and 700 for primary text
- Roboto Mono (monospace): Loaded with weights 400, 500, and 700 for code and technical content (not used, but there if I need it)
- Exposed via CSS custom properties: `var(--font-sans)` and `var(--font-mono)`
- Configured as CSS variables in the root layout and extended in Tailwind configuration for seamless integration

Text Sample:

![text sample](image-56.png)

Font Loading in DevTools:

![dev tools font loading](image-57.png)

##### Normalize.css / CSS Reset

Using HeroUI which includes its own normalization:

- Consistent styling across browsers
- Base component styles from HeroUI theme
- Tailwind's [preflight](https://tailwindcss.com/docs/preflight) (built-in normalization)

Homepage on Vivaldi and Firefox:

![firefox vs vivaldi](image-59.png)

#### Apply design techniques like partial transparency, link state styling, and CSS Grid for a polished, professional look.

##### Partial Transparency

Used throughout for sophisticated effects:

- `bg-gray-200/65 dark:bg-gray-900/65` on carousel navigation
- Semi-transparent navbar while in animation state
- Semi-transparent modal while in animation state
- Creates depth and modern aesthetic

Carousel Navigation:

![button](image-58.png)

Semi-transparent Modal:

![modal appearing](image-47.png)

##### Link State Styling

Multiple link states implemented:

- `underline="active"` for links
- `showAnchorIcon` for external links
- `isExternal` attribute for proper behavior
- Active navigation state: `text-primary` when on current page
- Hover states from HeroUI theme (slightly darkens on hover)

Normal button state:

![normal button](image-19.png)

Hover button state (slightly darker):

![hover button](image-20.png)

Clicked button state (Lighter circle propogates from cursor):

![Clicked button](image-21.png)

##### CSS Grid and Flexbox

Flexible layouts using modern CSS:

- `flex flex-col sm:flex-row` for responsive switching
- `justify-around`, `justify-center` for alignment
- `gap-3`, `gap-6 `for spacing
- `flex-[0_0_100%]` for carousel slides
- `flex-1`, `flex-2` for proportional sizing

Comparison of mobile and desktop card layout for the advice page:

![Comparison of mobile and desktop card layout advice page](image-17.png)

Examples of flex in DevTools:

![flex in devtools](image-60.png)

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